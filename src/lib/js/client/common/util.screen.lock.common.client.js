import {EVENT_LOCK_SCREEN, EVENT_RELEASE_SCREEN} from "$lib/js/client/common/event.common.client.js";

let locked

export function init() {
    window.addEventListener(EVENT_LOCK_SCREEN, lockScreen)
    window.addEventListener(EVENT_RELEASE_SCREEN, releaseScreen)
}

export function isScreenLocked() {
    return locked
}

function lockScreen() {
    locked = true
}

function releaseScreen() {
    locked = false
}