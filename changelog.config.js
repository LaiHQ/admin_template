/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-24 12:29:21
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-24 12:57:47
 */
module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: [
        'test',
        'feat',
        'fix',
        'chore',
        'docs',
        'refactor',
        'style',
        'ci',
        'perf'
    ],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: [
        'type',
        'scope',
        'subject',
        'body',
        'breaking',
        'issues',
        'lerna'
    ],
    scopes: [],
    types: {
        chore: {
            description: '构建过程或辅助工具更改',
            emoji: '🤖',
            value: 'chore'
        },
        ci: {
            description: 'CI 相关的改变',
            emoji: '🎡',
            value: 'ci'
        },
        docs: {
            description: '只修改了文档',
            emoji: '✏️',
            value: 'docs'
        },
        feat: {
            description: '一个新功能',
            emoji: '🎸',
            value: 'feat'
        },
        fix: {
            description: '故障修复',
            emoji: '🐛',
            value: 'fix'
        },
        perf: {
            description: '改进性能的代码修改',
            emoji: '⚡️',
            value: 'perf'
        },
        refactor: {
            description: '既不修复故障也不增加新功能的代码修改',
            emoji: '💡',
            value: 'refactor'
        },
        release: {
            description: '创建发布提交',
            emoji: '🏹',
            value: 'release'
        },
        style: {
            description: '仅仅是代码格式/风格的修改',
            emoji: '💄',
            value: 'style'
        },
        test: {
            description: '添加缺失的测试',
            emoji: '💍',
            value: 'test'
        }
    },
    messages: {
        type: '请选择提交类型(必填)',
        customScope: '请输入文件修改范围(可选)',
        subject: '请简要描述提交(必填)',
        body: '请输入详细描述(可选)',
        breaking: '列出任何BREAKING CHANGES(可选)',
        footer: '请输入要关闭的issue(可选)',
        confirmCommit: '确定提交此说明吗？'
    }
}
