import {
    EVENT_ON_MOUNT_BIG_SCREEN,
    EVENT_ON_MOUNT_BIG_SCREEN_REVERSE,
    EVENT_ON_MOUNT_HOVERABLE,
    EVENT_ON_MOUNT_HOVERABLE_REVERSE,
    EVENT_ON_MOUNT_SMALL_SCREEN,
    EVENT_ON_MOUNT_SMALL_SCREEN_REVERSE,
    EVENT_ON_MOUNT_TOUCHABLE,
    EVENT_ON_MOUNT_TOUCHABLE_REVERSE,
    EVENT_REMOVE_BIG_SCREEN_LISTENER,
    EVENT_REMOVE_BIG_SCREEN_LISTENERS,
    EVENT_REMOVE_BIG_SCREEN_REVERSE_LISTENER,
    EVENT_REMOVE_HOVERABLE_LISTENER,
    EVENT_REMOVE_HOVERABLE_LISTENERS,
    EVENT_REMOVE_HOVERABLE_REVERSE_LISTENER,
    EVENT_REMOVE_SCREEN_LISTENERS,
    EVENT_REMOVE_SMALL_SCREEN_LISTENER,
    EVENT_REMOVE_SMALL_SCREEN_LISTENERS,
    EVENT_REMOVE_SMALL_SCREEN_REVERSE_LISTENER,
    EVENT_REMOVE_TOUCHABLE_LISTENER,
    EVENT_REMOVE_TOUCHABLE_LISTENERS,
    EVENT_REMOVE_TOUCHABLE_REVERSE_LISTENER
} from "$lib/js/client/common/event.common.client.js";

const mapOnMountBigScreen = new Map(),
    mapOnMountBigScreenReverse = new Map(),
    mapOnMountSmallScreen = new Map(),
    mapOnMountSmallScreenReverse = new Map(),
    mapOnMountHoverable = new Map(),
    mapOnMountHoverableReverse = new Map(),
    mapOnMountTouchable = new Map(),
    mapOnMountTouchableReverse = new Map()

export function init() {
    setupScreen()
    setupHoverable()
    setupTouchable()
}

function setupScreen() {
    window
        .matchMedia("(min-width: 65.001em)")
        .addEventListener(
            "change",
            (query) => {
                if (query.matches)
                    onBigScreen()
                else
                    onSmallScreen()
            }
        )

    window.addEventListener(EVENT_ON_MOUNT_BIG_SCREEN, onMountBigScreen)
    window.addEventListener(EVENT_ON_MOUNT_BIG_SCREEN_REVERSE, onMountBigScreenReverse)
    window.addEventListener(EVENT_REMOVE_BIG_SCREEN_LISTENER, removeBigScreenListener)
    window.addEventListener(EVENT_REMOVE_BIG_SCREEN_REVERSE_LISTENER, removeBigScreenReverseListener)
    window.addEventListener(EVENT_REMOVE_BIG_SCREEN_LISTENERS, removeBigScreenListeners)

    window.addEventListener(EVENT_ON_MOUNT_SMALL_SCREEN, onMountSmallScreen)
    window.addEventListener(EVENT_ON_MOUNT_SMALL_SCREEN_REVERSE, onMountSmallScreenReverse)
    window.addEventListener(EVENT_REMOVE_SMALL_SCREEN_LISTENER, removeSmallScreenListener)
    window.addEventListener(EVENT_REMOVE_SMALL_SCREEN_REVERSE_LISTENER, removeSmallScreenReverseListener)
    window.addEventListener(EVENT_REMOVE_SMALL_SCREEN_LISTENERS, removeSmallScreenListeners)

    window.addEventListener(EVENT_REMOVE_SCREEN_LISTENERS, removeScreenListeners)
}

function onBigScreen() {
    for (const f of mapOnMountSmallScreenReverse.values())
        f()

    for (const f of mapOnMountBigScreen.values())
        f()
}

function onSmallScreen() {
    for (const f of mapOnMountBigScreenReverse.values())
        f()

    for (const f of mapOnMountSmallScreen.values())
        f()
}

function onMountBigScreen(event) {
    const { id, f } = event.detail

    mapOnMountBigScreen.set(id, f)

    if (window.matchMedia("(min-width: 65.001em)").matches)
        f()
}

function onMountBigScreenReverse(event) {
    const { id, f } = event.detail

    mapOnMountBigScreenReverse.set(id, f)
}

function removeBigScreenListener(event) {
    const id = event.detail

    mapOnMountBigScreen.delete(id)
}

function removeBigScreenReverseListener(event) {
    const id = event.detail

    mapOnMountBigScreenReverse.delete(id)
}

function removeBigScreenListeners(event) {
    const id = event.detail

    mapOnMountBigScreen.delete(id)
    mapOnMountBigScreenReverse.delete(id)
}

//

function onMountSmallScreen(event) {
    const { id, f } = event.detail

    mapOnMountSmallScreen.set(id, f)

    if (!window.matchMedia("(min-width: 65.001em)").matches)
        f()
}

function onMountSmallScreenReverse(event) {
    const { id, f } = event.detail

    mapOnMountSmallScreenReverse.set(id, f)
}

function removeSmallScreenListener(event) {
    const id = event.detail

    mapOnMountSmallScreen.delete(id)
}

function removeSmallScreenReverseListener(event) {
    const id = event.detail

    mapOnMountSmallScreenReverse.delete(id)
}

function removeSmallScreenListeners(event) {
    const id = event.detail

    mapOnMountSmallScreen.delete(id)
    mapOnMountSmallScreenReverse.delete(id)
}

function removeScreenListeners(event) {
    const id = event.detail

    removeBigScreenListeners({ detail: id })
    removeSmallScreenListeners({ detail: id })
}

//

function setupHoverable() {
    window
        .matchMedia("(hover: hover)")
        .addEventListener(
            "change",
            (query) => {
                if (query.matches)
                    onHoverable()
                else
                    onHoverableReverse()
            }
        )

    window.addEventListener(EVENT_ON_MOUNT_HOVERABLE, onMountHoverable)
    window.addEventListener(EVENT_ON_MOUNT_HOVERABLE_REVERSE, onMountHoverableReverse)
    window.addEventListener(EVENT_REMOVE_HOVERABLE_LISTENER, removeHoverableListener)
    window.addEventListener(EVENT_REMOVE_HOVERABLE_REVERSE_LISTENER, removeHoverableReverseListener)
    window.addEventListener(EVENT_REMOVE_HOVERABLE_LISTENERS, removeHoverableListeners)
}

function onHoverable() {
    for (const f of mapOnMountHoverable.values())
        f()
}

function onHoverableReverse() {
    for (const f of mapOnMountHoverableReverse.values())
        f()
}

function onMountHoverable(event) {
    const { id, f } = event.detail

    mapOnMountHoverable.set(id, f)

    if (window.matchMedia("(hover: hover)").matches)
        f()
}

function onMountHoverableReverse(event) {
    const { id, f } = event.detail

    mapOnMountHoverableReverse.set(id, f)
}

function removeHoverableListener(event) {
    const id = event.detail

    mapOnMountHoverable.delete(id)
}

function removeHoverableReverseListener(event) {
    const id = event.detail

    mapOnMountHoverableReverse.delete(id)
}

function removeHoverableListeners(event) {
    const id = event.detail

    mapOnMountHoverable.delete(id)
    mapOnMountHoverableReverse.delete(id)
}

//

function setupTouchable() {
    window
        .matchMedia("((hover: none) and (pointer: fine)) or ((hover: none) and (pointer: coarse)) or ((hover: hover) and (pointer: coarse))")
        .addEventListener(
            "change",
            (query) => {
                if (query.matches)
                    onTouchable()
                else
                    onTouchableReverse()
            }
        )

    window.addEventListener(EVENT_ON_MOUNT_TOUCHABLE, onMountTouchable)
    window.addEventListener(EVENT_ON_MOUNT_TOUCHABLE_REVERSE, onMountTouchableReverse)
    window.addEventListener(EVENT_REMOVE_TOUCHABLE_LISTENER, removeTouchableListener)
    window.addEventListener(EVENT_REMOVE_TOUCHABLE_REVERSE_LISTENER, removeTouchableReverseListener)
    window.addEventListener(EVENT_REMOVE_TOUCHABLE_LISTENERS, removeTouchableListeners)
}

function onTouchable() {
    for (const f of mapOnMountTouchable.values())
        f()
}

function onTouchableReverse() {
    for (const f of mapOnMountTouchableReverse.values())
        f()
}

function onMountTouchable(event) {
    const { id, f } = event.detail

    mapOnMountTouchable.set(id, f)

    if (window.matchMedia("((hover: none) and (pointer: fine)) or ((hover: none) and (pointer: coarse)) or ((hover: hover) and (pointer: coarse))").matches)
        f()
}

function onMountTouchableReverse(event) {
    const { id, f } = event.detail

    mapOnMountTouchableReverse.set(id, f)
}

function removeTouchableListener(event) {
    const id = event.detail

    mapOnMountTouchable.delete(id)
}

function removeTouchableReverseListener(event) {
    const id = event.detail

    mapOnMountTouchableReverse.delete(id)
}

function removeTouchableListeners(event) {
    const id = event.detail

    mapOnMountTouchable.delete(id)
    mapOnMountTouchableReverse.delete(id)
}

// TODO: review
export function getMediaQueryForResponsiveImage(media) {
    return `(-webkit-min-device-pixel-ratio: ${media.density - 1 + 0.01}) and (-webkit-max-device-pixel-ratio: ${media.density}) and (min-width: ${media.minWidth / 16}em) and (max-width: ${media.maxWidth / 16}em)`
}

// TODO: update
export function getLinkForResponsiveImage(imageName, media, updatedAt, onceRatio = true) {
    let link = "/api/image" + "/" + imageName + "?density=" + media.density + "&width=" + media.photoWidth

    if (!onceRatio && media.aspectRatio)
        link += "&ratio=" + media.aspectRatio[0] + "-" + media.aspectRatio[1]

    if (updatedAt)
        link += "&updated-at=" + updatedAt

    return link
}