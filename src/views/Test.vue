<!--
 * Test Test
 * @author perlou
 * @since 0.0.1
 -->

<template>
    <div class="test-container page-container">
        <div class="page-title">Unit Test Page</div>
        <p>count is: {{ count }}</p>
        <button @click="increment">increment</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({ name: 'ViewsTest' })

const count = ref<number>(0)
const increment = () => {
    count.value += 1
}
</script>

<style scoped lang="scss">
button {
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
}
</style>
