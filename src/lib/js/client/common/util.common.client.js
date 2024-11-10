import {goto} from "$app/navigation";
import {EVENT_PERFORM_RIPPLE_EFFECT} from "$lib/js/client/common/event.common.client.js";
import {waitFor} from "$lib/js/common/util.common.js";
import {DURATION_RIPPLE} from "$lib/js/client/common/constant.transition.common.client.js";
import {browser} from "$app/environment";

if (browser)
    initZeroTimeout()

function initZeroTimeout() {
    const timeouts = [],
        messageName = 'zero-timeout-message'

    function setZeroTimeout(f) {
        timeouts.push(f)
        window.postMessage(messageName, '*')
    }

    function handleMessage(event) {
        if (event.source !== window || event.data !== messageName)
            return

        event.stopPropagation()

        if (timeouts.length > 0)
            timeouts.shift()()
    }

    window.addEventListener('message', handleMessage, true)
    window.setZeroTimeout = setZeroTimeout
}

export async function onLinkClick(event) {
    event.preventDefault()

    const href = event.currentTarget.href

    await performRippleEffectAndWait(event)
    goto(href)
}

export async function onLinkClickOnNewTab(event) {
    event.preventDefault()

    const href = event.currentTarget.href

    await performRippleEffectAndWait(event)
    window.open(href, '_blank')
}

export function performRippleEffect(event) {
    window.dispatchEvent(new CustomEvent(
        EVENT_PERFORM_RIPPLE_EFFECT, {
            detail: {
                clickX: event.clientX,
                clickY: event.clientY
            }
        })
    )
}

export async function performRippleEffectAndWait(event) {
    performRippleEffect(event)
    await waitFor(DURATION_RIPPLE)
}

export function yieldToMain() {
    if (browser && setZeroTimeout)
        return new Promise(resolve => setZeroTimeout(() => queueMicrotask(resolve)))
    else
        return new Promise(resolve => setTimeout(() => queueMicrotask(resolve), 0))
}