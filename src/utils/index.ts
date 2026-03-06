import dayjs from 'dayjs'

/**
 * 格式化日期
 * @param date 日期
 * @param format 格式，默认 YYYY-MM-DD HH:mm:ss
 */
export function formatDate(
    date: string | number | Date,
    format = 'YYYY-MM-DD HH:mm:ss'
): string {
    return dayjs(date).format(format)
}

/**
 * 防抖
 */
export function debounce<T extends (...args: any[]) => any>(
    fn: T,
    delay = 300
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>
    return (...args: Parameters<T>) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

/**
 * 节流
 */
export function throttle<T extends (...args: any[]) => any>(
    fn: T,
    delay = 300
): (...args: Parameters<T>) => void {
    let last = 0
    return (...args: Parameters<T>) => {
        const now = Date.now()
        if (now - last >= delay) {
            last = now
            fn(...args)
        }
    }
}
