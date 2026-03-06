<!--
 * NotFound 404 页面
 * @author perlou
 * @since 1.0.0
 -->

<template>
    <div class="not-found page-container">
        <div class="not-found-content">
            <h1 class="error-code">404</h1>
            <p class="error-text">页面不存在</p>
            <el-button type="primary" @click="router.push('/')"> 返回首页 </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'NotFound' })

const router = useRouter()
</script>

<style scoped lang="scss">
.not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .not-found-content {
        text-align: center;
    }

    .error-code {
        font-size: 120px;
        font-weight: bold;
        color: #dcdfe6;
        margin: 0;
        line-height: 1;
    }

    .error-text {
        font-size: 20px;
        color: #909399;
        margin: 20px 0 40px;
    }
}
</style>
