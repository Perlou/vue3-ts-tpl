// api 模块只是作为 demo，按项目实际需要替换掉就行

import ax from './http'

export default {
    github: {
        getUserInfo() {
            return ax.get('/users/perlou')
        }
    }
}
