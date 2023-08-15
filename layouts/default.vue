<template>
    <div>
        <MainHeader />
        <div class="allContent">
            <slot />
        </div>
        <ScrollToTopButton />
        <MainFooter />
    </div>
</template>



<script>

</script>



<style>
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
    .allContent {
        margin-top: 5rem;
        padding: 0.5;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>