<template>
    <HelloWorld
        msg="Hi! I'm simple Vue-Typescript-SCSS starter."
        :initialEnthusiasm="1"
    />
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
    name: 'App',
    components: {
        HelloWorld,
    },
});
</script>

<style lang="scss">
@use './styles/variables/colors';
@use './styles/variables/typography';

body {
    font-family: typography.$font-family, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: colors.$text;
}
</style>
