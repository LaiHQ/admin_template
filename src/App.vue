<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-13 18:16:16
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-23 16:43:20
-->
<template>
    <router-view></router-view>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
    components: { HelloWorld }
}
</script>
<style lang="less">
:root {
    --primary-color: @primary-color;
    --link-color: @link-color;
    --success-color: @success-color; // 成功色
    --warning-color: @warning-color; // 警告色
    --error-color: @error-color; // 错误色
    --font-size-base: @font-size-base; // 主字号
    --heading-color: @heading-color; // 标题色
    --text-color: @text-color; // 主文本色
    --text-color-secondary: @text-color-secondary; // 次文本色
    --disabled-color: @disabled-color; // 失效色
    --border-radius-base: @border-radius-base; // 组件/浮层圆角
    --border-color-base: @border-color-base; // 边框色
    --box-shadow-base: @box-shadow-base; // 浮层阴影
}
</style>
