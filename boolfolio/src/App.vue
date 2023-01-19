<script>
import AppMain from './components/AppMain.vue';

export default {
    components: {
        AppMain,
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <AppMain />
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
