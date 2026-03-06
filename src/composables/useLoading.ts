import { ref } from 'vue'

/**
 * 通用加载状态 composable
 *
 * @example
 * ```ts
 * const { loading, run } = useLoading()
 * const data = await run(fetchData())
 * ```
 */
export function useLoading(initialValue = false) {
    const loading = ref(initialValue)

    async function run<T>(promise: Promise<T>): Promise<T> {
        loading.value = true
        try {
            return await promise
        } finally {
            loading.value = false
        }
    }

    return { loading, run }
}
