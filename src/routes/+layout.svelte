<script>
    import '$lib/css/usual/big.screen.usual.css';
    import '$lib/css/usual/colors.usual.css';
    import '$lib/css/usual/displaying.usual.css';
    import '$lib/css/usual/flex.usual.css';
    import '$lib/css/usual/gaps.usual.css';
    import '$lib/css/usual/grid.usual.css';
    import '$lib/css/usual/images.usual.css';
    import '$lib/css/usual/layout.properties.usual.css';
    import '$lib/css/usual/left.menu.big.screen.usual.css';
    import '$lib/css/usual/padding.and.margin.usual.css';
    import '$lib/css/usual/positioning.usual.css';
    import '$lib/css/usual/small.screen.usual.css';
    import '$lib/css/usual/text.properties.usual.css';
    import '$lib/css/usual/texts.usual.css';
    import '$lib/css/usual/usual.css';
    import '$lib/css/usual/width.and.height.usual.css';

    import '$lib/css/project/common/project.animations.common.css';
    import '$lib/css/project/common/project.fonts.common.css';
    import '$lib/css/project/common/project.grid.common.css';

    import {createGlobalState} from "$lib/js/client/common/util.global.state.common.client.svelte.js";
    import {init as initUtilResponsive} from "$lib/js/client/common/util.responsive.common.client.js";
    import {browser} from "$app/environment";
    import Ripple from "$lib/components/common/Ripple.svelte";
    import {EVENT_NAVIGATED, EVENT_NAVIGATING} from "$lib/js/client/common/event.common.client.js";
    import {afterNavigate, beforeNavigate} from "$app/navigation";
    import ProgressBar from "$lib/components/common/ProgressBar.svelte";

    createGlobalStates()

    const {children} = $props()

    let firstTime = true

    if (browser)
        init()

    beforeNavigate(_beforeNavigate)
    afterNavigate(_afterNavigate)

    function createGlobalStates() {
        createGlobalState('hoverable')
    }

    function init() {
        initUtilResponsive()
    }

    function _beforeNavigate({type}) {
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
<Ripple/>