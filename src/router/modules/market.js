//营销中心

const pre = '/market/';

export default [
    // {
    //     path: `${pre}index`,
    //     name: 'market',
    //     title: '会员管理',
    //     fold: true,
    //     component: () => import('@/views/market/index.vue'),
    //     meta: {icon: 'hy-icon'}
    // }, {
    //     path: `${pre}coupon`,
    //     name: 'marketCoupon',
    //     title: '优惠券',
    //     fold: true,
    //     component: () => import('@/views/market/coupon/index.vue'),
    //     meta: {icon: 'yhq-icon'}
    // }
    {
        path: `${pre}index`,
        name: 'market',
        title: 'study',
        redirect: `${pre}index/model`,
        component: () => import('@/views/market/index.vue'),
        meta: {icon: 'product-list'},
        fold: true, //折叠
        children: [{
            path: `${pre}index/model`,
            name: 'model',
            title: 'model-watch-computed',
            component: () => import('@/views/market/models/model.vue'),
        }, {
            path: `${pre}index/closure`,
            name: 'closure',
            title: '闭包',
            component: () => import('@/views/market/models/closure.vue'),
        }]
    }, {
        path: `${pre}coupon`,
        name: 'coupon',
        title: '待定',
        component: () => import('@/views/market/index.vue'),
        fold: true,
        children: [{
            path: `${pre}coupon/index`, //repertory.vue
            name: 'coupon',
            title: '待定中。。。',
            component: () => import('@/views/market/coupon/index.vue'),
        }]
    }
]