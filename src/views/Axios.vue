<!--
 * Axios Axios
 * @author perlou
 * @date 2021-11-21 14:51
 * @since 0.0.1
 -->

<template>
  <div class="axios-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="user-info-container">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>Perlou</span>
                    <el-button
                        class="button"
                        type="text"
                        @click="getUserInfo">
                        点击获取Perlou信息
                    </el-button>
                </div>
            </template>
            <div class="info-list-box" v-loading="loading">
                <el-avatar
                    v-if="userInfo?.avatar_url"
                    class="item"
                    :size="80"
                    :src="userInfo?.avatar_url"
                ></el-avatar>
                <div class="text item" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
                <div class="text item" v-if="userInfo?.location">location: {{ userInfo?.location }}</div>
                <div class="text item" v-if="userInfo?.company">company: {{ userInfo?.company }}</div>
                <div class="text item" v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
                <div class="text item" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
                <div class="text item" v-if="userInfo?.html_url">github: <a target="_blank" :href="userInfo?.html_url">{{ userInfo?.html_url }}</a></div>
            </div>
        </el-card>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import api from '@/api';

export default defineComponent({
    name: 'Axios',
    setup() {
        const userInfo: Ref = ref(null)
        const loading = ref(false)
        const getUserInfo = async function () {
            loading.value = true
            try {
                const res = await api.github.getUserInfo()
                userInfo.value = res.data
            } catch(err) {
                console.log(err)
            }
            loading.value = false
        }

        return {
            userInfo,
            loading,
            getUserInfo
        }
    }
})

</script>

<style scoped lang="scss">
@import "@/style/base/base.scss";

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
