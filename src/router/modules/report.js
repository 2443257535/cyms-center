//报表中心

const pre = '/report/';

export default [
    {
        path: `${pre}index`,
        name: 'report',
        title: '收银明细',
        fold: true,
        component: () => import('@/views/report/index.vue'),
        meta: {icon: 'symx-icon'}
    }, {
        path: `${pre}collectmoney`,
        name: 'reportCollectmoney',
        title: '查询',
        fold: true,
        component: () => import('@/views/report/collectmoney/index.vue'),
        meta: {icon: 'cx-icon'}
    }
]