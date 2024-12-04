<script>
    import {onLampClick} from "$lib/js/client/common/util.lamp.common.client.js";
</script>

<button id="lamp"
        class="p-none p-f z-index-4 l-0 t-0 w-h-100" onclick={onLampClick}
        aria-label="Lamp Button"></button>

<style>
    #lamp {
        cursor: default;

        background: rgba(0, 0, 0, 0.5);

        opacity: 0;

        transition: opacity 0.5s;

        backdrop-filter: blur(.5rem);
    }
</style>