<!--
 * @Descripttion: 登录后布局组件
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-23 13:35:18
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-24 10:08:22
-->
<template>
    <a-layout class="layout">
        <a-layout-header class="header">
            <div class="logo_warp">
                <div
                    class="icon"
                    :style="{
                        background: `url(${'https://alicdn.1d1j.cn/1450051644017414145/school/d34b97eb02644cc4aad84bbd27d5f237-1450051644017414145.png'})`
                    }"
                ></div>
                <span class="name">深圳宝安实验中学</span>
            </div>
            <div class="user_warp">谁谁谁</div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="216" style="background: #fff">
                <a-menu
                    mode="inline"
                    :style="{ height: '100%', borderRight: 0 }"
                    @click="handleMenu"
                >
                    <template v-for="item in menuData">
                        <a-menu-item v-if="!item.children" :key="item.path">
                            <user-outlined />
                            {{ item.meta.title }}
                        </a-menu-item>
                        <a-sub-menu v-else :key="item.path">
                            <template #title>
                                <user-outlined />
                                {{ item.meta.title }}
                            </template>
                            <a-menu-item
                                v-for="citem in item.children"
                                :key="citem.path"
                            >
                                {{ citem.meta.title }}
                            </a-menu-item>
                        </a-sub-menu>
                    </template>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <!--  -->
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <!--  -->
                <a-layout-content
                    :style="{
                        background: '#fff',
                        padding: '24px',
                        margin: 0,
                        minHeight: '280px'
                    }"
                >
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined
    },
    setup() {
        const router = useRouter()
        const getMenuData = (routes) => {
            const menuData = []
            routes.forEach((item) => {
                if (item.name && !item.hideInMenu) {
                    const newItem = { ...item }
                    delete newItem.children
                    if (item.children && !item.hideChildrenInMenu) {
                        newItem.children = getMenuData(item.children)
                    }
                    menuData.push(newItem)
                } else if (
                    !item.hideInMenu &&
                    !item.hideChildrenInMenu &&
                    item.children
                ) {
                    menuData.push(...getMenuData(item.children))
                }
            })
            return menuData
        }

        const menuData = getMenuData(router.options.routes)

        //  console.log(router.options.routes);

        // console.log(menuData);

        const handleMenu = ({ item, key, keyPath }) => {
            // console.log( item, key, keyPath );
            router.push({
                path: `${key}`
            })
        }
        return {
            menuData: menuData[0].children,
            handleMenu,
            selectedKeys2: ref<string[]>(['1']),
            collapsed: ref<boolean>(false),
            openKeys: ref<string[]>(['sub1'])
        }
    }
})
</script>
<style lang="less">
.layout {
    min-height: 100vh;
}
.header {
    background: @primary-color;
    height: 48px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    .logo_warp {
        display: flex;
        align-items: center;
        .icon {
            width: 38px;
            height: 38px;
            background-size: 38px 38px;
            background-repeat: no-repeat;
            margin-right: 16px;
            border-radius: 50%;
        }
        .name {
            color: #fff;
        }
    }
    .user_warp {
        display: flex;
        align-items: center;
        color: #fff;
    }
}
</style>
