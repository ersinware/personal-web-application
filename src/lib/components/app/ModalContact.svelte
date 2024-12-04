<script>
    async function onCancelClick() {

    }

    async function onProceedClick() {

    }
</script>

<!--disabled={!formValid || $dontInterruptModal}-->
<!--class:disabled-button-nude={!formValid || $dontInterruptModal}-->

<article class="flex f-column a-i-c g-v-d-modal big-screen-w-modal">
    <div class="w-100">
        <h1 class="title-modal m-h-auto">Contact Me</h1>
<!--        <p class="text-hint-modal m-h-auto">1/2</p>-->
    </div>

    <p class="text-modal">
        Beatae culpa incidunt porro quos repellendus, veniam? Doloremque incidunt quisquam!
    </p>

    <div class="wrapper-modal-inputs w-100 color-background-second b-r-d"></div>

    <div class="wrapper-modal-buttons w-100">
        <button type="button"
                class="button-nude button-nude-negative-unimportant"
                on:click={onCancelClick}>

            CLOSE
        </button>

        <button type="button"
                class="button-nude button-nude-positive"
                on:click={onProceedClick}>

            CONTINUE
        </button>
    </div>
</article>

<style>
    .wrapper-modal-inputs {
        height: 17.5rem;
    }

    .wrapper-modal-buttons {
        justify-content: left;
    }
</style>