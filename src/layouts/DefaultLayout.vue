<!--
 * DefaultLayout 默认布局
 * @author perlou
 * @since 1.0.0
 -->

<template>
    <main class="layout-container">
        <div class="layout-top">
            <Header />
        </div>

        <div class="layout-bottom">
            <div class="layout-left">
                <Nav />
            </div>

            <div class="layout-right">
                <div class="layout-content">
                    <router-view />
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
</script>

<style scoped lang="scss">
$top-height: 60px;
$left-side-width: 80px;

.layout-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: $second-background-color;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .layout-top {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: $top-height;
        margin-bottom: 10px;
    }

    .layout-bottom {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .layout-left {
            position: relative;
            width: $left-side-width;
            height: 100%;
            box-sizing: border-box;
        }

        .layout-right {
            position: relative;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0 10px 10px 10px;

            .layout-content {
                position: relative;
                width: 100%;
                height: 100%;
                background: $background-color;
                border-radius: 5px;
                box-sizing: border-box;
                padding: 10px;
            }
        }
    }
}
</style>
