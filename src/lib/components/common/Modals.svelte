<script>
    import {cubicInOut} from 'svelte/easing'
    import {fly} from 'svelte/transition'
    import {getGlobalState} from "$lib/js/client/common/util.global.state.common.client.svelte.js";
    import {DURATION_TRANSITION_MODAL} from "$lib/js/client/common/constant.transition.common.client.js";
    import {onMount} from "svelte";
    import {EVENT_ADD_LISTENER_BIG_SCREEN, EVENT_ADD_LISTENER_SMALL_SCREEN} from "$lib/js/client/common/event.common.client.js";

    const openModals = getGlobalState('openModals'),
        lastModal = $derived(openModals.value[openModals.value.length - 1])

    let TRANSITION_MODAL_Y = $state.raw()

    onMount(() => {
            window.dispatchEvent(
                new CustomEvent(
                    EVENT_ADD_LISTENER_BIG_SCREEN,
                    {
                        detail: {
                            id: 'modals',
                            f: () => {
                                TRANSITION_MODAL_Y = '-1rem'
                            }
                        }
                    }
                )
            )

            window.dispatchEvent(
                new CustomEvent(
                    EVENT_ADD_LISTENER_SMALL_SCREEN,
                    {
                        detail: {
                            id: 'modals',
                            f: () => {
                                TRANSITION_MODAL_Y = '1rem'
                            }
                        }
                    }
                )
            )
        }
    )
</script>

{#if lastModal}
    <div class="wrapper-base b-box p-f z-index-5 small-screen-w-100 small-screen-max-w-phone"
         transition:fly={{
                    y: TRANSITION_MODAL_Y,
                    duration: DURATION_TRANSITION_MODAL,
                    easing: cubicInOut
                }}>

        {#key lastModal.component}
            <div class="wrapper b-box color-background o-y-scroll"
                 in:fly={{
                    y: TRANSITION_MODAL_Y,
                    duration: DURATION_TRANSITION_MODAL,
                    easing: cubicInOut
                }}>

                {@render lastModal.component(lastModal.props)}
            </div>
        {/key}
    </div>
{/if}

<style>
    .wrapper-base {
        left: 50%;
    }

    .wrapper {
        max-height: var(--max-h-modal);

        padding-block: var(--p-v-modal);
        padding-left: var(--p-h-modal);
        padding-right: var(--p-h-modal);
    }

    @media (min-width: 65.001em) {
        .wrapper-base {
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .wrapper {
            border-radius: var(--border-radius);
        }
    }

    @media (max-width: 65em) {
        .wrapper-base {
            bottom: 0;
            transform: translateX(-50%);
        }

        .wrapper {
            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
        }
    }
</style>