<script>
import axios from 'axios';
import AppNav from './components/AppNav.vue';

export default {
    components: {
        AppNav,
    }
}
</script>

<template>
    <AppNav />
    <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
