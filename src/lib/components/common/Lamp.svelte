<script>
    import {onLampClick} from "$lib/js/client/common/util.lamp.common.client.js";
</script>

<button id="lamp"
        class="p-none p-f l-0 t-0 w-h-100" onclick={onLampClick}
        aria-label="Lamp Button"></button>

<style>
    #lamp {
        cursor: default;

        z-index: var(--z-index-three);

        background: rgba(0, 0, 0, 0.5) !important;

        opacity: 0;

        transition: opacity 0.5s;

        backdrop-filter: blur(.5rem);
    }
</style>