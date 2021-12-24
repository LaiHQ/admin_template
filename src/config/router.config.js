/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-23 11:22:03
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-24 18:08:01
 */
import { BasicLayout } from '@/layouts/index.js'
const RouteView = {
    name: 'RouteView',
    render: (h) => h('router-view')
}

export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        meta: { title: '首页' },
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'home',
                meta: { title: '首页' },
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/framework',
                name: 'framework',
                meta: { title: '组织管理' },
                component: () => import('@/views/framework/index.vue'),
                redirect: '/framework/workers',
                children: [
                    {
                        path: '/framework/workers',
                        name: 'workers',
                        meta: { title: '教职工管理' },
                        component: () =>
                            import('@/views/framework/workers/index.vue')
                    },
                    {
                        path: '/framework/schoolroll',
                        name: 'schoolroll',
                        meta: { title: '学籍管理' },
                        component: () =>
                            import('@/views/framework/schoolroll/index.vue')
                    }
                ]
            }
            // {
            //     path: '*', redirect: '/404', hidden: true
            // }
        ]
    }
]
