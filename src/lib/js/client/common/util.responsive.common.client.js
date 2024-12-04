import {
    EVENT_ADD_LISTENER_BIG_SCREEN,
    EVENT_ADD_LISTENER_BIG_SCREEN_REVERSE,
    EVENT_ADD_LISTENER_HOVERABLE,
    EVENT_ADD_LISTENER_HOVERABLE_REVERSE,
    EVENT_ADD_LISTENER_SMALL_SCREEN,
    EVENT_ADD_LISTENER_SMALL_SCREEN_REVERSE,
    EVENT_ADD_LISTENER_TOUCHABLE,
    EVENT_ADD_LISTENER_TOUCHABLE_REVERSE,
    EVENT_REMOVE_LISTENER_BIG_SCREEN,
    EVENT_REMOVE_LISTENERS_BIG_SCREEN,
    EVENT_REMOVE_LISTENER_BIG_SCREEN_REVERSE,
    EVENT_REMOVE_LISTENER_HOVERABLE,
    EVENT_REMOVE_LISTENERS_HOVERABLE,
    EVENT_REMOVE_LISTENER_HOVERABLE_REVERSE,
    EVENT_REMOVE_LISTENERS_SCREEN,
    EVENT_REMOVE_LISTENER_SMALL_SCREEN,
    EVENT_REMOVE_LISTENERS_SMALL_SCREEN,
    EVENT_REMOVE_LISTENER_SMALL_SCREEN_REVERSE,
    EVENT_REMOVE_LISTENER_TOUCHABLE,
    EVENT_REMOVE_LISTENERS_TOUCHABLE,
    EVENT_REMOVE_LISTENER_TOUCHABLE_REVERSE
} from "$lib/js/client/common/event.common.client.js";

const mapListenersBigScreen = new Map(),
    mapListenersBigScreenReverse = new Map(),
    mapListenersSmallScreen = new Map(),
    mapListenersSmallScreenReverse = new Map(),
    mapListenersHoverable = new Map(),
    mapListenersHoverableReverse = new Map(),
    mapListenersTouchable = new Map(),
    mapListenersTouchableReverse = new Map()

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

    window.addEventListener(EVENT_ADD_LISTENER_BIG_SCREEN, addListenerBigScreen)
    window.addEventListener(EVENT_ADD_LISTENER_BIG_SCREEN_REVERSE, addListenerBigScreenReverse)
    window.addEventListener(EVENT_REMOVE_LISTENER_BIG_SCREEN, removeListenerBigScreen)
    window.addEventListener(EVENT_REMOVE_LISTENER_BIG_SCREEN_REVERSE, removeListenerBigScreenReverse)
    window.addEventListener(EVENT_REMOVE_LISTENERS_BIG_SCREEN, removeListenersBigScreen)

    window.addEventListener(EVENT_ADD_LISTENER_SMALL_SCREEN, addListenerSmallScreen)
    window.addEventListener(EVENT_ADD_LISTENER_SMALL_SCREEN_REVERSE, addListenerSmallScreenReverse)
    window.addEventListener(EVENT_REMOVE_LISTENER_SMALL_SCREEN, removeListenerSmallScreen)
    window.addEventListener(EVENT_REMOVE_LISTENER_SMALL_SCREEN_REVERSE, removeListenerSmallScreenReverse)
    window.addEventListener(EVENT_REMOVE_LISTENERS_SMALL_SCREEN, removeListenersSmallScreen)

    window.addEventListener(EVENT_REMOVE_LISTENERS_SCREEN, removeListenersScreen)
}

function onBigScreen() {
    for (const f of mapListenersSmallScreenReverse.values())
        f()

    for (const f of mapListenersBigScreen.values())
        f()
}

function onSmallScreen() {
    for (const f of mapListenersBigScreenReverse.values())
        f()

    for (const f of mapListenersSmallScreen.values())
        f()
}

function addListenerBigScreen(event) {
    const { id, f } = event.detail

    mapListenersBigScreen.set(id, f)

    if (window.matchMedia("(min-width: 65.001em)").matches)
        f()
}

function addListenerBigScreenReverse(event) {
    const { id, f } = event.detail

    mapListenersBigScreenReverse.set(id, f)
}

function removeListenerBigScreen(event) {
    const id = event.detail

    mapListenersBigScreen.delete(id)
}

function removeListenerBigScreenReverse(event) {
    const id = event.detail

    mapListenersBigScreenReverse.delete(id)
}

function removeListenersBigScreen(event) {
    const id = event.detail

    mapListenersBigScreen.delete(id)
    mapListenersBigScreenReverse.delete(id)
}

//

function addListenerSmallScreen(event) {
    const { id, f } = event.detail

    mapListenersSmallScreen.set(id, f)

    if (!window.matchMedia("(min-width: 65.001em)").matches)
        f()
}

function addListenerSmallScreenReverse(event) {
    const { id, f } = event.detail

    mapListenersSmallScreenReverse.set(id, f)
}

function removeListenerSmallScreen(event) {
    const id = event.detail

    mapListenersSmallScreen.delete(id)
}

function removeListenerSmallScreenReverse(event) {
    const id = event.detail

    mapListenersSmallScreenReverse.delete(id)
}

function removeListenersSmallScreen(event) {
    const id = event.detail

    mapListenersSmallScreen.delete(id)
    mapListenersSmallScreenReverse.delete(id)
}

//

function removeListenersScreen(event) {
    const id = event.detail

    removeListenersBigScreen({ detail: id })
    removeListenersSmallScreen({ detail: id })
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

    window.addEventListener(EVENT_ADD_LISTENER_HOVERABLE, addListenerHoverable)
    window.addEventListener(EVENT_ADD_LISTENER_HOVERABLE_REVERSE, onListenerHoverableReverse)
    window.addEventListener(EVENT_REMOVE_LISTENER_HOVERABLE, removeListenerHoverable)
    window.addEventListener(EVENT_REMOVE_LISTENER_HOVERABLE_REVERSE, removeListenerHoverableReverse)
    window.addEventListener(EVENT_REMOVE_LISTENERS_HOVERABLE, removeListenersHoverable)
}

function onHoverable() {
    for (const f of mapListenersHoverable.values())
        f()
}

function onHoverableReverse() {
    for (const f of mapListenersHoverableReverse.values())
        f()
}

function addListenerHoverable(event) {
    const { id, f } = event.detail

    mapListenersHoverable.set(id, f)

    if (window.matchMedia("(hover: hover)").matches)
        f()
}

function onListenerHoverableReverse(event) {
    const { id, f } = event.detail

    mapListenersHoverableReverse.set(id, f)
}

function removeListenerHoverable(event) {
    const id = event.detail

    mapListenersHoverable.delete(id)
}

function removeListenerHoverableReverse(event) {
    const id = event.detail

    mapListenersHoverableReverse.delete(id)
}

function removeListenersHoverable(event) {
    const id = event.detail

    mapListenersHoverable.delete(id)
    mapListenersHoverableReverse.delete(id)
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

    window.addEventListener(EVENT_ADD_LISTENER_TOUCHABLE, addListenerTouchable)
    window.addEventListener(EVENT_ADD_LISTENER_TOUCHABLE_REVERSE, addListenerTouchableReverse)
    window.addEventListener(EVENT_REMOVE_LISTENER_TOUCHABLE, removeListenerTouchable)
    window.addEventListener(EVENT_REMOVE_LISTENER_TOUCHABLE_REVERSE, removeListenerTouchableReverse)
    window.addEventListener(EVENT_REMOVE_LISTENERS_TOUCHABLE, removeListenersTouchable)
}

function onTouchable() {
    for (const f of mapListenersTouchable.values())
        f()
}

function onTouchableReverse() {
    for (const f of mapListenersTouchableReverse.values())
        f()
}

function addListenerTouchable(event) {
    const { id, f } = event.detail

    mapListenersTouchable.set(id, f)

    if (window.matchMedia("((hover: none) and (pointer: fine)) or ((hover: none) and (pointer: coarse)) or ((hover: hover) and (pointer: coarse))").matches)
        f()
}

function addListenerTouchableReverse(event) {
    const { id, f } = event.detail

    mapListenersTouchableReverse.set(id, f)
}

function removeListenerTouchable(event) {
    const id = event.detail

    mapListenersTouchable.delete(id)
}

function removeListenerTouchableReverse(event) {
    const id = event.detail

    mapListenersTouchableReverse.delete(id)
}

function removeListenersTouchable(event) {
    const id = event.detail

    mapListenersTouchable.delete(id)
    mapListenersTouchableReverse.delete(id)
}

//

// TODO: review, get from jacksons-car-detailing
export function getMediaQueryForResponsiveImage(media) {
    return `(-webkit-min-device-pixel-ratio: ${media.density - 1 + 0.01}) and (-webkit-max-device-pixel-ratio: ${media.density}) and (min-width: ${media.minWidth / 16}em) and (max-width: ${media.maxWidth / 16}em)`
}

// TODO: review, get from jacksons-car-detailing
export function getLinkForResponsiveImage(imageName, media, updatedAt, onceRatio = true) {
    let link = "/api/image" + "/" + imageName + "?density=" + media.density + "&width=" + media.photoWidth

    if (!onceRatio && media.aspectRatio)
        link += "&ratio=" + media.aspectRatio[0] + "-" + media.aspectRatio[1]

    if (updatedAt)
        link += "&updated-at=" + updatedAt

    return link
}