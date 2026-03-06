/** HTTP 状态码 */
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
} as const

/** 本地存储 Key 常量 */
export const STORAGE_KEYS = {
    TOKEN: 'token',
    USER_INFO: 'user_info',
    THEME: 'theme'
} as const

/** 默认分页配置 */
export const DEFAULT_PAGINATION = {
    PAGE: 1,
    PAGE_SIZE: 20
} as const
