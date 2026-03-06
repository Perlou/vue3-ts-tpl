<!--
 * Nav 导航
 * @author perlou
 * @since 1.0.0
 -->

<template>
    <aside class="nav">
        <ul class="nav-list">
            <li
                v-for="(nav, index) in navList"
                :key="index"
                class="nav-item flex-center"
                :class="{ active: nav.isActive }"
                @click="navClick(nav)"
            >
                {{ nav.name }}
            </li>
        </ul>
    </aside>
</template>

<script lang="ts" setup>
import { reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

interface NavItem {
    path: string
    name: string
    isActive: boolean
}

const router = useRouter()

const navList = reactive<NavItem[]>(
    router
        .getRoutes()
        .filter(
            (route) =>
                route.meta &&
                !route.meta.hidden &&
                route.meta.title &&
                route.path !== '/' &&
                !route.path.includes(':')
        )
        .map((route) => ({
            name: (route.meta.title as string) || route.name?.toString() || '',
            isActive: false,
            path: route.path || '/'
        }))
)

const navClick = (e: NavItem) => {
    router.push(e.path)
}

const changeNavActive = (currentPath: string) => {
    navList.forEach((v: NavItem) => {
        v.isActive = v.path === currentPath
    })
}

watch(
    () => router.currentRoute.value,
    (_n) => {
        changeNavActive(_n.path)
    }
)

onMounted(() => {
    router.isReady().then(() => {
        changeNavActive(router.currentRoute.value.path)
    })
})
</script>

<style scoped lang="scss">
.nav {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #fff;

    .nav-list {
        .nav-item {
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            cursor: pointer;

            &.active {
                font-weight: bold;
                background: #f1f1f1;
            }
        }
    }
}
</style>
