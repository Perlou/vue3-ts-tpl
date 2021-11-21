<!--
 * Test Test
 * @author perlou
 * @date 2021-11-21 13:44
 * @since 0.0.1
 -->

<template>
    <div class="test-container page-container">
        <div class="page-title">Unit Test Page</div>
        <p>count is: {{ count }}</p>
        <button @click="increment">increment</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'views-test',
    setup() {
        const count = ref<number>(0)
        const increment = () => {
            count.value += 1
        }
        return {
            count,
            increment
        }
    }
})
</script>

<style scoped lang="scss">
button {
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
}
</style>
