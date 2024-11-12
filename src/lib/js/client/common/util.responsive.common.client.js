import {
    EVENT_ON_BIG_SCREEN,
    EVENT_ON_MOUNT_BIG_SCREEN,
    EVENT_ON_MOUNT_BIG_SCREEN_REVERSE, EVENT_ON_MOUNT_HOVERABLE, EVENT_ON_MOUNT_HOVERABLE_REVERSE,
    EVENT_ON_MOUNT_SMALL_SCREEN,
    EVENT_ON_MOUNT_SMALL_SCREEN_REVERSE,
    EVENT_ON_SMALL_SCREEN,
    EVENT_REMOVE_BIG_SCREEN_LISTENERS, EVENT_REMOVE_HOVERABLE_LISTENERS,
    EVENT_REMOVE_SCREEN_LISTENERS,
    EVENT_REMOVE_SMALL_SCREEN_LISTENERS
} from "$lib/js/client/common/event.common.client.js";

const mapOnMountBigScreen = new Map(),
    mapOnMountBigScreenReverse = new Map(),
    mapOnMountSmallScreen = new Map(),
    mapOnMountSmallScreenReverse = new Map(),
    mapOnMountHoverable = new Map(),
    mapOnMountHoverableReverse = new Map()

export function init() {
    setupScreen()
    setupHoverable()
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
    window.addEventListener(EVENT_REMOVE_BIG_SCREEN_LISTENERS, removeBigScreenListeners)

    window.addEventListener(EVENT_ON_MOUNT_SMALL_SCREEN, onMountSmallScreen)
    window.addEventListener(EVENT_ON_MOUNT_SMALL_SCREEN_REVERSE, onMountSmallScreenReverse)
    window.addEventListener(EVENT_REMOVE_SMALL_SCREEN_LISTENERS, removeSmallScreenListeners)

    window.addEventListener(EVENT_REMOVE_SCREEN_LISTENERS, removeScreenListeners)
}

function onBigScreen() {
    window.dispatchEvent(new CustomEvent(EVENT_ON_BIG_SCREEN))

    for (const f of mapOnMountSmallScreenReverse.values())
        f()

    for (const f of mapOnMountBigScreen.values())
        f()
}

function onSmallScreen() {
    window.dispatchEvent(new CustomEvent(EVENT_ON_SMALL_SCREEN))

    for (const f of mapOnMountBigScreenReverse.values())
        f()

    for (const f of mapOnMountSmallScreen.values())
        f()
}

function onMountBigScreen(event) {
    const {id, f} = event.detail

    mapOnMountBigScreen.set(id, f)

    if (window.matchMedia("(min-width: 65.001em)").matches)
        f()
}

function onMountBigScreenReverse(event) {
    const {id, f} = event.detail

    mapOnMountBigScreenReverse.set(id, f)
}

function onMountSmallScreen(event) {
    const {id, f} = event.detail

    mapOnMountSmallScreen.set(id, f)

    if (!window.matchMedia("(min-width: 65.001em)").matches)
        f()
}

function onMountSmallScreenReverse(event) {
    const {id, f} = event.detail

    onMountSmallScreenReverse.set(id, f)
}

function removeBigScreenListeners(event) {
    const id = event.detail

    mapOnMountBigScreen.delete(id)
    mapOnMountBigScreenReverse.delete(id)
}

function removeSmallScreenListeners(event) {
    const id = event.detail

    mapOnMountSmallScreen.delete(id)
    mapOnMountSmallScreenReverse.delete(id)
}

function removeScreenListeners(event) {
    const id = event.detail

    removeBigScreenListeners(id)
    removeSmallScreenListeners(id)
}

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
    const {id, f} = event.detail

    mapOnMountHoverable.set(id, f)

    if (window.matchMedia("(hover: hover)"))
        f()
}

function onMountHoverableReverse(event) {
    const {id, f} = event.detail

    mapOnMountHoverableReverse.set(id, f)
}

function removeHoverableListeners(event) {
    const id = event.detail

    mapOnMountHoverable.delete(id)
    mapOnMountHoverableReverse.delete(id)
}