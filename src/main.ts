/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-13 18:16:16
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-24 18:05:20
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import '@/style/reset.css';
import router from './router';
// 暗黑主题
// import 'ant-design-vue/dist/antd.dark.less';

import App from './App.vue';
const app = createApp(App)

// const antCompList = [
//     Button,
//     Layout,
//     Breadcrumb,Menu,Table
// ];
// antCompList.forEach(comp => {
//     app.use(comp);
// });

app.use(Antd);

app.config.productionTip = false;
// app.config.globalProperties.$message = message;
app.use(router).mount('#app')               
