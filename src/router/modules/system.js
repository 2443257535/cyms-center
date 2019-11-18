//系统设置
const pre = '/system/';

export default [
    {
        path: `${pre}index`,
        name: 'system',
        title: '集团架构',
        component: () => import('@/views/system/index.vue'),
        meta: {icon: 'jtjg-icon'}
    }, {
        path: `${pre}authority`,
        name: 'systemAuthority',
        title: '员工资料',
        component: () => import('@/views/system/authority/employee.vue'),
        meta: {icon: 'ygzl-icon'}
    }
]