import {EVENT_PERFORM_RIPPLE_EFFECT, EVENT_PERFORM_RIPPLE_EFFECT_FOR_FRAMED_BUTTON} from "$lib/js/client/common/event.common.client.js";
import {waitFor} from "$lib/js/common/util.common.js";
import {DURATION_RIPPLE, DURATION_RIPPLE_FOR_FRAMED_BUTTON} from "$lib/js/client/common/constant.transition.common.client.js";

export async function performRippleEffectAndWait(event) {
    window.dispatchEvent(new CustomEvent(EVENT_PERFORM_RIPPLE_EFFECT, { detail: { clickX: event.clientX, clickY: event.clientY } }))
    await waitFor(DURATION_RIPPLE)
}

export async function performRippleEffectForFramedButtonAndWait(event) {
    const rect = event.currentTarget.getBoundingClientRect()

    window.dispatchEvent(
        new CustomEvent(
            EVENT_PERFORM_RIPPLE_EFFECT_FOR_FRAMED_BUTTON,
            {
                detail: {
                    clickX: event.clientX,
                    clickY: event.clientY,
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height,
                    borderRadius: getComputedStyle(event.currentTarget).borderRadius
                }
            }
        )
    )

    await waitFor(DURATION_RIPPLE_FOR_FRAMED_BUTTON)
}