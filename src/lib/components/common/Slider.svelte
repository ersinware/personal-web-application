<script>
    import {
        EVENT_ON_MOUNT_TOUCHABLE,
        EVENT_ON_MOUNT_TOUCHABLE_REVERSE,
        EVENT_REMOVE_TOUCHABLE_LISTENERS,
        EVENT_SLIDER_INDEX_CHANGED,
        EVENT_SLIDER_INSERT_ELEMENTS_FOR_INFINITY,
        EVENT_SLIDER_LOADED,
        EVENT_SLIDER_NAVIGATION_TO_NEXT,
        EVENT_SLIDER_NAVIGATION_TO_PREV,
        EVENT_SLIDER_SLIDE_TO_INDEX
    } from '$lib/js/client/common/event.common.client.js'
    import {onDestroy, onMount} from 'svelte'
    import {cubicInOut} from 'svelte/easing'
    import {tweened} from 'svelte/motion'
    import {browser} from "$app/environment";
    import {waitFor} from "$lib/js/common/util.common.js";
    import {yieldToMain} from "$lib/js/client/common/util.common.client.js";

    const {
            id,
            scrollDuration = $bindable(1250),
            infinite,
            children
        } = $props(),
        eventPostfix = '-' + id,
        currentScroll = tweened(0, { duration: scrollDuration, easing: cubicInOut })

    let activeIndex,
        slider,
        startTime,
        startX,
        startY,
        startScroll

    onMount(async () => {
        await yieldToMain()
        calculate()

        if (slider.children.length === 1)
            return

        addEventListeners()
        addTouchListeners()
    })

    onDestroy(() => {
        if (!browser)
            return

        removeListeners()
    })

    function addEventListeners() {
        window.addEventListener('resize', onResize)

        window.addEventListener(EVENT_SLIDER_NAVIGATION_TO_NEXT + eventPostfix, toNext)
        window.addEventListener(EVENT_SLIDER_NAVIGATION_TO_PREV + eventPostfix, toPrev)
        window.addEventListener(EVENT_SLIDER_SLIDE_TO_INDEX + eventPostfix, toIndex)
    }

    function addTouchListeners() {
        const wrapper = document.getElementById(id + '-wrapper')

        window.dispatchEvent(
            new CustomEvent(
                EVENT_ON_MOUNT_TOUCHABLE,
                {
                    detail: {
                        id,
                        f: () => {
                            wrapper.addEventListener('touchstart', onTouchStart)
                            wrapper.addEventListener('touchmove', onTouchMove)
                            wrapper.addEventListener('touchcancel', onTouchCancel)
                            wrapper.addEventListener('touchend', onTouchEnd)
                        }
                    }
                }
            )
        )

        window.dispatchEvent(
            new CustomEvent(
                EVENT_ON_MOUNT_TOUCHABLE_REVERSE,
                {
                    detail: {
                        id,
                        f: () => {
                            wrapper.removeEventListener('touchstart', onTouchStart)
                            wrapper.removeEventListener('touchmove', onTouchMove)
                            wrapper.removeEventListener('touchcancel', onTouchCancel)
                            wrapper.removeEventListener('touchend', onTouchEnd)
                        }
                    }
                }
            )
        )
    }

    function removeListeners() {
        window.removeEventListener('resize', onResize)

        window.removeEventListener(EVENT_SLIDER_NAVIGATION_TO_PREV + eventPostfix, toNext)
        window.removeEventListener(EVENT_SLIDER_NAVIGATION_TO_NEXT + eventPostfix, toPrev)
        window.removeEventListener(EVENT_SLIDER_SLIDE_TO_INDEX + eventPostfix, toIndex)

        window.dispatchEvent(new CustomEvent(EVENT_REMOVE_TOUCHABLE_LISTENERS, { detail: id }))
    }

    function onResize() {
        scrollImmediately()
    }

    function calculate() {
        slider = document.getElementById(id)

        if (slider.children.length === 1)
            return

        activeIndex = infinite ? 1 : 0

        window.dispatchEvent(new CustomEvent(EVENT_SLIDER_LOADED + eventPostfix, { detail: { activeIndex } }))

        if (infinite)
            window.dispatchEvent(new CustomEvent(EVENT_SLIDER_INSERT_ELEMENTS_FOR_INFINITY + eventPostfix))

        scrollImmediately()
        currentScroll.subscribe(onScroll)
    }

    function scrollImmediately(target) {
        currentScroll.set(target ?? getTargetLeft(), { duration: 0 })
    }

    function onScroll() {
        slider.scrollLeft = $currentScroll
    }

    function onTouchStart(event) {
        startTime = Date.now()

        const touch = event.touches[0]
        startX = touch.clientX
        startY = touch.clientY

        startScroll = $currentScroll
    }

    function onTouchMove(event) {
        if (startY === 'block')
            return

        const currentY = event.touches[0].clientY

        if (Math.abs(startY - currentY) > 30) {
            startY = 'block'
            toIndex({ detail: { index: getActiveIndexByInfinity() } })

            return
        }

        const currentX = event.touches[0].clientX

        if (Math.abs(startX - currentX) < 15)
            return

        scrollImmediately(startScroll + startX - currentX)
    }

    function onTouchCancel() {
        onTouchEnd()
    }

    function onTouchEnd() {
        if (startY === 'block')
            return

        if (Date.now() - startTime < 333) {
            if ($currentScroll > startScroll) {
                toNext()

                return
            }

            if ($currentScroll < startScroll) {
                toPrev()

                return
            }
        }

        if ($currentScroll > startScroll) {
            if (infinite && atLast() && $currentScroll >= getNextEdge(activeIndex)) {
                toNext()

                return
            }

            let targetIndex = activeIndex
            while (!atLast(targetIndex))
                if ($currentScroll >= getNextEdge(targetIndex))
                    targetIndex++
                else
                    break

            toIndex({ detail: { index: infinite ? targetIndex - 1 : targetIndex } })

            return
        }

        if ($currentScroll < startScroll) {
            if (infinite && atFirst() && $currentScroll <= getPreviousEdge(activeIndex)) {
                toPrev()

                return
            }

            let targetIndex = activeIndex
            while (!atFirst(targetIndex))
                if ($currentScroll <= getPreviousEdge(targetIndex))
                    targetIndex--
                else
                    break

            toIndex({ detail: { index: infinite ? targetIndex - 1 : targetIndex } })

            return
        }

        toIndex({ detail: { index: getActiveIndexByInfinity() } })
    }

    async function toNext() {
        if (atLast()) {
            if (!infinite)
                return

            increment()
            scroll()
            broadcastIndexChange(0)

            await waitFor(scrollDuration)

            activeIndex = 1
            scrollImmediately()

            return
        }

        increment()
        scroll()
        broadcastIndexChange()
    }

    async function toPrev() {
        if (atFirst()) {
            if (!infinite)
                return

            decrement()
            scroll()
            broadcastIndexChange(getPageCountByInfinity() - 1)

            await waitFor(scrollDuration)

            activeIndex = getPageCountByInfinity()
            scrollImmediately()

            return
        }

        decrement()
        scroll()
        broadcastIndexChange()
    }

    function toIndex(event) {
        activeIndex = infinite ? event.detail.index + 1 : event.detail.index
        scroll()

        broadcastIndexChange()
    }

    function scroll() {
        currentScroll.set(getTargetLeft(), { duration: scrollDuration })
    }

    function increment() {
        activeIndex++
    }

    function decrement() {
        activeIndex--
    }

    function broadcastIndexChange(index) {
        window.dispatchEvent(new CustomEvent(EVENT_SLIDER_INDEX_CHANGED + eventPostfix, { detail: index ?? getActiveIndexByInfinity() }))
    }

    function getActiveIndexByInfinity() {
        return infinite ? activeIndex - 1 : activeIndex
    }

    function getPageCountByInfinity() {
        return infinite ? slider.children.length - 2 : slider.children.length
    }

    function atLast(index) {
        const pageCount = getPageCountByInfinity()
        return infinite ? (index ?? activeIndex) === pageCount : (index ?? activeIndex) === pageCount - 1
    }

    function atFirst(index) {
        return infinite ? (index ?? activeIndex) === 1 : (index ?? activeIndex) === 0
    }

    function getTargetLeft(index) {
        return (index ?? activeIndex) * slider.clientWidth
    }

    function getNextEdge(index) {
        return getTargetLeft(index) + slider.clientWidth / 2
    }

    function getPreviousEdge(index) {
        return getTargetLeft(index) - slider.clientWidth / 2
    }
</script>

<div id={id + '-wrapper'} class="d-contents">
    {@render children()}
</div>
