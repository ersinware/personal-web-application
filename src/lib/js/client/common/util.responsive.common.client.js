import {getGlobalState, setGlobalState} from "$lib/js/client/common/util.global.state.common.client.svelte.js";

const mapOnMountHoverable = new Map(),
    mapOnMountHoverableReverse = new Map()

export function init() {
    setupHoverable()
}

function setupHoverable() {
    const mql = window.matchMedia("(hover: hover)")

    setGlobalState('hoverable', mql.matches)

    mql.addEventListener(
        "change",
        (query) => {
            setGlobalState('hoverable', query.matches)

            if (query.matches)
                onHoverable()
            else
                onHoverableReverse()
        }
    )
}

export function onMountHoverable(id, f) {
    mapOnMountHoverable.set(id, f)

    if (getGlobalState('hoverable').value)
        f()
}

export function onMountHoverableReverse(id, f) {
    mapOnMountHoverableReverse.set(id, f)
}

export function removeHoverableListeners(id) {
    mapOnMountHoverable.delete(id)
    mapOnMountHoverableReverse.delete(id)
}

function onHoverable() {
    setGlobalState('hoverable', true)

    for (const f of mapOnMountHoverable.values())
        f()
}

function onHoverableReverse() {
    setGlobalState('hoverable', false)

    for (const f of mapOnMountHoverableReverse.values())
        f()
}