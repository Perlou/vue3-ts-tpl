<!--
 * Header Header
 * @author perlou
 * @date 2021-11-20 17:21
 * @since 0.0.1
 -->

<template>
    <div class="header">
        <div class="title" @click="router.push('/')">
            Vite2.x + Vue3.x + TypeScript + Element Plus
        </div>
        <div class="go-github" @click="goGitHub">
            <i class="icon el-icon-s-promotion"></i> GitHub
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const router = useRouter()

// eslint-disable-next-line no-unused-vars
const goGitHub = () => {
    window.open('https://github.com/Perlou/vue3-ts-tpl')
}
</script>

<style scoped lang="scss">
@import '@/style/base/base.scss';

.header {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    font-weight: bold;

    .title {
        font-size: 20px;
        cursor: pointer;
    }

    .go-github {
        cursor: pointer;
        font-size: 16px;

        .icon {
            font-size: 20px;
        }
    }
}
</style>
