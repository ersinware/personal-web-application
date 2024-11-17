import {
    EVENT_ADD_INTERSECTION_OBSERVER,
    EVENT_REMOVE_INTERSECTION_OBSERVER
} from "$lib/js/client/common/event.common.client.js";

const mapNodes = new Map()

export function init() {
    window.addEventListener(EVENT_ADD_INTERSECTION_OBSERVER, addIntersectionObserver)
    window.addEventListener(EVENT_REMOVE_INTERSECTION_OBSERVER, removeIntersectionObserver)
}

function addIntersectionObserver(event) {
    const {node, onVisible, onInvisible, options} = event.detail,
        observer = new IntersectionObserver(
            entries => onIntersectionChange(entries, onVisible, onInvisible),
            options
        )

    observer.observe(node)
    mapNodes.set(node.id, observer)

    return observer
}

function onIntersectionChange(entries, onVisible, onInvisible) {
    for (const entry of entries)
        if (entry.isIntersecting) {
            onVisible()

            return
        }

    if (onInvisible)
        onInvisible()
}

function removeIntersectionObserver(event) {
    const id = event.detail

    if (!mapNodes.has(id))
        return

    mapNodes.get(id).disconnect()
    mapNodes.delete(id)
}