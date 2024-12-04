import {goto} from "$app/navigation";
import {browser} from "$app/environment";
import {performRippleEffectAndWait} from "$lib/js/client/common/util.ripple.common.client.js";

export function init() {
    initZeroTimeout()
}

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

export function yieldToMain() {
    if (browser && setZeroTimeout)
        return new Promise(resolve => setZeroTimeout(() => queueMicrotask(resolve)))
    else
        return new Promise(resolve => setTimeout(() => queueMicrotask(resolve), 0))
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