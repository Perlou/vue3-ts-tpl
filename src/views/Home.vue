<!--
 * Home Home
 * @author perlou
 * @since 0.0.1
 -->
<template>
    <div class="home-container page-container">
        <img class="vue-element-plus-logo" alt="Vue logo" src="../assets/logo.png" />
        <div class="page-title">Vite + Vue3 + TypeScript + Element Plus</div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'ViewsHome' })
</script>

<style scoped lang="scss">
.home-container {
    .vue-element-plus-logo {
        width: 50%;
    }
}
</style>
