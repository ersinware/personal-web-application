import {getContext, setContext} from "svelte";

// `getContext(...)` can only be used during component initialisation
const states = new Map()

export function createGlobalState(key, initialValue) {
    const state = $state({value: initialValue})

    setContext(key, state)
    states.set(key, state)

    return state
}

export function setGlobalState(key, value) {
    states.get(key).value = value
}

export function getGlobalState(key) {
    return getContext(key)
}