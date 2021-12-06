/* eslint-disable prettier/prettier */
<!--
 * Svgicon.vue svgicon
 * @author Perlou
 * @date 2021-12-06 12:28
 * @since 0.0.1
 -->

<template>
    <div class="con">
        <p>
            <icon original width="300" height="300" :data="vueSvg" />
        </p>

        <p>
            文档地址:
            <a href="https://mmf-fe.github.io/svgicon/" target="blank">
                https://mmf-fe.github.io/svgicon/
            </a>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vueSvg from '@/assets/svg-icon/vue.svg'

export default defineComponent({
    name: 'svg-icon',
    setup() {
        return {
            vueSvg
        }
    }
})
</script>

<style scoped lang="scss">
@import '@/style/base/base.scss';

.con {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
