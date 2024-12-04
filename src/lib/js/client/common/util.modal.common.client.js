import {
    EVENT_ADD_LISTENER_BIG_SCREEN,
    EVENT_CLOSE_ALL_MODALS,
    EVENT_CLOSE_LAMP,
    EVENT_CLOSE_LAST_MODAL,
    EVENT_OPEN_LAMP,
    EVENT_OPEN_MODAL
} from "$lib/js/client/common/event.common.client.js";

let openModals

export function init(_openModals) {
    openModals = _openModals

    window.addEventListener(EVENT_OPEN_MODAL, openModal)
    window.addEventListener(EVENT_CLOSE_LAST_MODAL, closeLastModal)
    window.addEventListener(EVENT_CLOSE_ALL_MODALS, closeAllModals)

    window.dispatchEvent(
        new CustomEvent(
            EVENT_ADD_LISTENER_BIG_SCREEN,
            {
                detail: {
                    id: 'util.modal.common.client',
                    f: onBigScreen
                }
            }
        )
    )

    document.addEventListener(
        'keydown',
        (event) => {
            if (event.key === 'Escape' && anyOpenModal())
                closeLastModal()
        })
}

export function anyOpenModal() {
    return openModals.value.length
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
    --openModals.value.length

    if (!anyOpenModal())
        window.dispatchEvent(new CustomEvent(EVENT_OPEN_LAMP))
}

function closeAllModals() {
    openModals.value.length = 0
    window.dispatchEvent(new CustomEvent(EVENT_OPEN_LAMP))
}

function onBigScreen() {
    if (anyOpenModal() && openModals.value[openModals.value.length - 1]?.bottomBarModal)
        closeLastModal()
}