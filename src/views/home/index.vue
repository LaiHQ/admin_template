<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-23 11:12:59
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-24 18:48:21
-->
<template>
    <a-row>
        <a-col :span="6">
            <a-directory-tree
                v-model:expandedKeys="expandedKeys"
                v-model:selectedKeys="selectedKeys"
                multiple
                :tree-data="treeData"
            ></a-directory-tree>
        </a-col>
        <a-col :span="18">
            <a-table :columns="columns" :data-source="data">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'create_time'">
                        自定义
                    </template>
                </template>
            </a-table>
        </a-col>
    </a-row>
</template>

<script>
export default {
    setup() {
        const expandedKeys = ref(['0-0', '0-1'])
        const selectedKeys = ref([])
        const treeData = [
            {
                title: 'parent 0',
                key: '0-0',
                children: [
                    {
                        title: 'leaf 0-0',
                        key: '0-0-0',
                        isLeaf: true
                    },
                    {
                        title: 'leaf 0-1',
                        key: '0-0-1',
                        isLeaf: true
                    }
                ]
            },
            {
                title: 'parent 1',
                key: '0-1',
                children: [
                    {
                        title: 'leaf 1-0',
                        key: '0-1-0',
                        isLeaf: true
                    },
                    {
                        title: 'leaf 1-1',
                        key: '0-1-1',
                        isLeaf: true
                    }
                ]
            }
        ]

        return {
            expandedKeys,
            selectedKeys,
            treeData,
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name'
                },
                {
                    title: '年龄',
                    dataIndex: 'age'
                },
                {
                    title: '创建时间',
                    dataIndex: 'create_time',
                    key: 'create_time'
                }
            ],
            data: [
                {
                    name: '张三',
                    age: 32,
                    create_time: '2021-12-24'
                }
            ]
        }
    }
}
</script>

<style></style>
