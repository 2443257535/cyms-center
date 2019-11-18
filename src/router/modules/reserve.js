//中央预定

const pre = '/reserve/';

export default [
    {
        path: `${pre}index`,
        name: 'reserve',
        title: '预定',
        fold: false,
        component: () => import('@/views/reserve/index.vue'),
        meta: {icon: 'zyyd-icon'}
    }
    // {
    //     path: `${pre}manage`,
    //     naem: 'resereManage',
    //     title: '预定管理',
    //     component: () => import('@/views/reserve/manage/index.vue'),
    //     meta: {icon: 'ydgl-icon'}
    // }, {
    //     path: `${pre}future`,
    //     naem: 'resereFutrue',
    //     title: '未来房情',
    //     component: () => import('@/views/reserve/future/index.vue'),
    //     meta: {icon: 'wlfq-icon'}
    // }
]