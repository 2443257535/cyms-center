//开发测试

const pre = '/develop/';

export default [
    {
        path: `${pre}index`,
        name: 'develop',
        title: '业务表配置',
        fold: true,
        component: () => import('@/views/develop/index.vue'),
        meta: {icon: 'table-icon'}
    }, {
        path: `${pre}logquery`,
        name: 'logquery',
        title: '日志查询',
        fold: true,
        component: () => import('@/views/develop/logquery/index.vue'),
        meta: {icon: 'log-icon'}
    }
]