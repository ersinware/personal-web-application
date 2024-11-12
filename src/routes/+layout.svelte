<script>
    import '$lib/css/usual/big.screen.usual.css';
    import '$lib/css/usual/bottom.bar.small.screen.usual.css';
    import '$lib/css/usual/color.usual.css';
    import '$lib/css/usual/display.usual.css';
    import '$lib/css/usual/flex.usual.css';
    import '$lib/css/usual/gap.usual.css';
    import '$lib/css/usual/grid.usual.css';
    import '$lib/css/usual/layout.property.usual.css';
    import '$lib/css/usual/left.menu.big.screen.usual.css';
    import '$lib/css/usual/modal.usual.css';
    import '$lib/css/usual/padding.and.margin.usual.css';
    import '$lib/css/usual/position.usual.css';
    import '$lib/css/usual/reset.css';
    import '$lib/css/usual/small.screen.usual.css';
    import '$lib/css/usual/text.property.usual.css';
    import '$lib/css/usual/text.usual.css';
    import '$lib/css/usual/usual.css';
    import '$lib/css/usual/width.and.height.usual.css';

    import '$lib/css/project/common/project.fonts.common.css';
    import '$lib/css/project/common/project.grid.common.css';

    import {createGlobalState, getGlobalState} from "$lib/js/client/common/util.global.state.common.client.svelte.js";
    import {init as initUtilResponsive} from "$lib/js/client/common/util.responsive.common.client.js";
    import {anyOpenModal, init as initUtilModal} from "$lib/js/client/common/util.modal.common.client.js";
    import {browser} from "$app/environment";
    import Ripple from "$lib/components/common/Ripple.svelte";
    import {
        EVENT_CLOSE_LAST_MODAL,
        EVENT_NAVIGATED,
        EVENT_NAVIGATING
    } from "$lib/js/client/common/event.common.client.js";
    import {afterNavigate, beforeNavigate} from "$app/navigation";
    import ProgressBar from "$lib/components/common/ProgressBar.svelte";
    import Modals from "$lib/components/common/Modals.svelte";
    import Lamp from "$lib/components/common/Lamp.svelte";
    import {init as initUtil} from "$lib/js/client/common/util.common.client.js";
    import {init as initUtilLamp} from "$lib/js/client/common/util.lamp.common.client.js";

    createGlobalStates()

    const {children} = $props()

    let firstTime = true

    if (browser)
        init()

    beforeNavigate(_beforeNavigate)
    afterNavigate(_afterNavigate)

    function createGlobalStates() {
        createGlobalState('openModals', [])
    }

    function init() {
        initUtil()
        initUtilLamp()
        initUtilResponsive()
        initUtilModal(getGlobalState('openModals'))
    }

    function _beforeNavigate({cancel, type}) {
        if (type === 'popstate' && anyOpenModal()) {
            cancel()
            window.dispatchEvent(new CustomEvent(EVENT_CLOSE_LAST_MODAL))

            return
        }

        if (type !== "leave")
            window.dispatchEvent(new CustomEvent(EVENT_NAVIGATING))
    }

    function _afterNavigate() {
        if (firstTime) {
            firstTime = false

            return
        }

        window.dispatchEvent(new CustomEvent(EVENT_NAVIGATED))
    }
</script>

{@render children()}

<ProgressBar/>
<Modals/>
<Lamp/>
<Ripple/>