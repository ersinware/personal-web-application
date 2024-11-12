import {
    EVENT_CLOSE_ALL_MODALS,
    EVENT_CLOSE_LAMP,
    EVENT_CLOSE_LAST_MODAL,
    EVENT_ON_BIG_SCREEN,
    EVENT_OPEN_LAMP,
    EVENT_OPEN_MODAL
} from "$lib/js/client/common/event.common.client.js";

let openModals,
    locked

export function init(_openModals) {
    openModals = _openModals

    window.addEventListener(EVENT_OPEN_MODAL, openModal)
    window.addEventListener(EVENT_CLOSE_LAST_MODAL, closeLastModal)
    window.addEventListener(EVENT_CLOSE_ALL_MODALS, closeAllModals)

    window.addEventListener(EVENT_ON_BIG_SCREEN, onBigScreen)

    document.addEventListener(
        'keydown',
        (event) => {
            if (event.key === 'Escape' && anyOpenModal())
                closeLastModal()
        })
}

function openModal(event) {
    const modal = event.detail

    if (!anyOpenModal())
        window.dispatchEvent(new CustomEvent(EVENT_CLOSE_LAMP))
    else if (!openModals.value[openModals.value.length - 1].addToBackstack)
        --openModals.value.length

    openModals.value.push(modal)
}

function closeLastModal() {
    if (locked)
        return

    --openModals.value.length

    if (!anyOpenModal())
        window.dispatchEvent(new CustomEvent(EVENT_OPEN_LAMP))
}

function closeAllModals() {
    if (locked)
        return

    openModals.value.length = 0
    window.dispatchEvent(new CustomEvent(EVENT_OPEN_MODAL))
}

function onBigScreen() {
    if (anyOpenModal() && openModals.value[openModals.value.length - 1]?.bottomBarModal)
        closeLastModal()
}

function lockModal() {
    locked = true
}

function releaseModal() {
    locked = false
}

export function anyOpenModal() {
    return openModals.value.length
}