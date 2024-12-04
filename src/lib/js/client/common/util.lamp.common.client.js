import {anyOpenModal} from "$lib/js/client/common/util.modal.common.client.js";
import {EVENT_CLOSE_LAMP, EVENT_CLOSE_LAST_MODAL, EVENT_OPEN_LAMP} from "$lib/js/client/common/event.common.client.js";
import {performRippleEffectAndWait} from "$lib/js/client/common/util.ripple.common.client.js";
import {isScreenLocked} from "$lib/js/client/common/util.screen.lock.common.client.js";

export function init() {
    window.addEventListener(EVENT_OPEN_LAMP, openLamp)
    window.addEventListener(EVENT_CLOSE_LAMP, closeLamp)
}

export async function onLampClick(event) {
    if (isScreenLocked())
        return

    if (anyOpenModal()) {
        await performRippleEffectAndWait(event)

        window.dispatchEvent(new CustomEvent(EVENT_CLOSE_LAST_MODAL))
    }
}

function openLamp() {
    document.getElementById("lamp").classList.remove("close-lamp")
    allowScroll()
}

function closeLamp() {
    document.getElementById("lamp").classList.add("close-lamp")
    cancelScroll()
}

function allowScroll() {
    document.querySelectorAll("[data-scrollable]").forEach((node) => node.classList.remove("o-y-hidden"))
}

function cancelScroll() {
    document.querySelectorAll("[data-scrollable]").forEach((node) => node.classList.add("o-y-hidden"))
}