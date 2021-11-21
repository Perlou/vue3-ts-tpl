<!--
 * Home Home
 * @author perlou
 * @date 2021-11-20 17:19
 * @since 0.0.1
 -->
<template>
    <div class="home-container page-container">
        <img class="vue-element-plus-logo" alt="Vue logo" src="../assets/logo.png" />
        <div class="page-title">Vite2.x + Vue3.x + TypeScript + Element Plus</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'views-home'
})
</script>

<style scoped lang="scss">
@import '@/style/base/base.scss';

.home-container {
    .vue-element-plus-logo {
        width: 50%;
    }
}
</style>
