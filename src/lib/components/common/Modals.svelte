<script>
    import {cubicInOut} from 'svelte/easing'
    import {fly} from 'svelte/transition'
    import {getGlobalState} from "$lib/js/client/common/util.global.state.common.client.svelte.js";
    import {DURATION_TRANSITION_MODAL} from "$lib/js/client/common/constant.transition.common.client.js";
    import {onMount} from "svelte";
    import {
        EVENT_ON_MOUNT_BIG_SCREEN,
        EVENT_ON_MOUNT_BIG_SCREEN_REVERSE
    } from "$lib/js/client/common/event.common.client.js";

    const openModals = getGlobalState('openModals'),
        lastModal = $derived(openModals.value[openModals.value.length - 1])

    let bigScreen = $state.raw()

    onMount(() => {
            window.dispatchEvent(
                new CustomEvent(
                    EVENT_ON_MOUNT_BIG_SCREEN,
                    {
                        detail: {
                            id: 'modals',
                            f: () => {
                                bigScreen = true
                            }
                        }
                    }
                )
            )

            window.dispatchEvent(
                new CustomEvent(
                    EVENT_ON_MOUNT_BIG_SCREEN_REVERSE,
                    {
                        detail: {
                            id: 'modals',
                            f: () => {
                                bigScreen = false
                            }
                        }
                    }
                )
            )
        }
    )
</script>

{#if lastModal}
    <div id="wrapper-base-modal"
         class="p-f small-screen-w-100 small-screen-max-w-phone"
         transition:fly={{
                    y: bigScreen ? '-1rem' : '1rem',
                    duration: DURATION_TRANSITION_MODAL,
                    easing: cubicInOut
                }}>

        {#key lastModal.component}
            <div id="wrapper-modal"
                 class="b-box color-background o-y-scroll "
                 in:fly={{
                    y: bigScreen ? '-1rem' : '1rem',
                    duration: DURATION_TRANSITION_MODAL,
                    easing: cubicInOut
                }}>

                {@render lastModal.component(lastModal.props)}
            </div>
        {/key}
    </div>
{/if}

<style>
    #wrapper-base-modal {
        left: 50%;
        z-index: var(--z-index-four);
    }

    #wrapper-modal {
        max-height: var(--max-h-modal);

        padding-block: var(--p-v-modal);
        padding-left: var(--p-h-modal);
        padding-right: var(--p-h-modal);
    }

    @media (min-width: 65.001em) {
        #wrapper-base-modal {
            top: 50%;
            transform: translate(-50%, -50%);
        }

        #wrapper-modal {
            border-radius: var(--border-radius);
        }
    }

    @media (max-width: 65em) {
        #wrapper-base-modal {
            bottom: 0;
            transform: translateX(-50%);
        }

        #wrapper-modal {
            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
        }
    }
</style>