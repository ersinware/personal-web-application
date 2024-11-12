import {getContext, setContext} from "svelte";

export function createGlobalState(key, initialValue) {
    const state = $state({value: initialValue})

    setContext(key, state)

    return state
}

export function getGlobalState(key) {
    return getContext(key)
}