/**
 * 统一 API 响应类型
 * 根据项目实际后端返回结构调整
 */
export interface ApiResponse<T = unknown> {
    /** 业务状态码 */
    code: number
    /** 响应数据 */
    data: T
    /** 提示信息 */
    message: string
}

/** 分页参数 */
export interface PaginationParams {
    page: number
    pageSize: number
}

/** 分页响应 */
export interface PaginatedData<T> {
    list: T[]
    total: number
    page: number
    pageSize: number
}
