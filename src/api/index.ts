// api 模块只是作为 demo，按项目实际需要替换掉就行

import ax from './http'

/** GitHub 用户信息类型 */
export interface GithubUser {
    login: string
    avatar_url: string
    name: string
    location: string
    company: string
    bio: string
    blog: string
    html_url: string
}

/** GitHub 相关 API */
export const githubApi = {
    /** 获取用户信息 */
    getUserInfo() {
        return ax.get<GithubUser>('/users/perlou')
    }
}

export default { github: githubApi }
