import {EVENT_PERFORM_RIPPLE_EFFECT} from "$lib/js/client/common/event.common.client.js";
import {waitFor} from "$lib/js/common/util.common.js";
import {DURATION_RIPPLE} from "$lib/js/client/common/constant.transition.common.client.js";

function performRippleEffect(event) {
    window.dispatchEvent(
        new CustomEvent(
            EVENT_PERFORM_RIPPLE_EFFECT,
            {
                detail: {
                    clickX: event.clientX,
                    clickY: event.clientY
                }
            }
        )
    )
}

export async function performRippleEffectAndWait(event) {
    performRippleEffect(event)
    await waitFor(DURATION_RIPPLE)
}