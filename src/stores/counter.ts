import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 示例 Store
 * 使用 Composition API 风格（推荐）
 */
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    function reset() {
        count.value = 0
    }

    return { count, doubleCount, increment, decrement, reset }
})
