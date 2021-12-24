/*
 * @Descripttion: 路由
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-23 11:12:21
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-23 18:11:55
 */
import { createRouter, createWebHashHistory } from "vue-router";

import { asyncRouterMap } from "@/config/router.config.js";
const router = createRouter({
	history: createWebHashHistory(),
	routes: asyncRouterMap,
});


export default router;