<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-23 11:12:59
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-24 19:53:47
-->
<template>
    <div>user谁谁谁s</div>
</template>

<script>
export default {
    date() {
        return {
            columns: [
                {
                    dataIndex: 'name',
                    key: 'name',
                    slots: { title: 'customTitle' },
                    scopedSlots: { customRender: 'name' }
                }
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer']
                }
            ]
        }
    }
}
</script>

<style></style>
