//首页
const pre = '/home/';

export default[
    {
        path: `${pre}index`,
        name: 'home',
        title: '首页',
        component: () => import('@/views/home/index.vue'),
        meta: { icon: 'product-list'}
    }
]