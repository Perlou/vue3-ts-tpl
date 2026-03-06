<!--
 * Axios 示例页
 * @author perlou
 * @since 1.0.0
 -->

<template>
    <div class="axios-container page-container">
        <div class="page-title">Axios Test Page</div>
        <div class="user-info-container">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>Perlou</span>
                        <el-button type="primary" link @click="fetchUserInfo">
                            点击获取Perlou信息
                        </el-button>
                    </div>
                </template>
                <div v-loading="loading" class="info-list-box">
                    <el-avatar
                        v-if="userInfo?.avatar_url"
                        class="item"
                        :size="80"
                        :src="userInfo?.avatar_url"
                    />
                    <div v-if="userInfo?.name" class="text item">
                        name: {{ userInfo?.name }}
                    </div>
                    <div v-if="userInfo?.location" class="text item">
                        location: {{ userInfo?.location }}
                    </div>
                    <div v-if="userInfo?.company" class="text item">
                        company: {{ userInfo?.company }}
                    </div>
                    <div v-if="userInfo?.bio" class="text item">
                        bio: {{ userInfo?.bio }}
                    </div>
                    <div v-if="userInfo?.blog" class="text item">
                        blog: {{ userInfo?.blog }}
                    </div>
                    <div v-if="userInfo?.html_url" class="text item">
                        github:
                        <a target="_blank" :href="userInfo?.html_url">
                            {{ userInfo?.html_url }}
                        </a>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { githubApi } from '@/api'
import type { GithubUser } from '@/api'
import { useLoading } from '@/composables'

defineOptions({ name: 'ViewsAxios' })

const userInfo = ref<GithubUser | null>(null)
const { loading, run } = useLoading()

const fetchUserInfo = async () => {
    try {
        const res = await run(githubApi.getUserInfo())
        userInfo.value = res.data
    } catch (err) {
        console.error(err)
    }
}
</script>

<style scoped lang="scss">
.axios-container {
    .user-info-container {
        display: flex;
        justify-content: center;
        width: 100%;

        .info-list-box {
            padding: 10px;

            .text {
                font-size: 14px;
            }

            .item {
                margin-bottom: 18px;
            }
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .box-card {
            width: 480px;
        }
    }
}
</style>
