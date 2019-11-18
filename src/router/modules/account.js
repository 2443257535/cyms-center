//账务中心
const pre = '/account/';
export default[
    {
        path: `${pre}index`,
        name: 'account',
        title: '当日账务',
        redirect: `${pre}index/bill`,
        component: () => import('@/views/account/index.vue'),
        meta: { icon: 'product-list'},
        fold: true, //折叠
        children: [{
            path: `${pre}index/bill`, //repertory.vue
            name: 'bill',
            title: '当日账单',
            component: () => import('@/views/account/today/bill.vue'),
        }, {
            path: `${pre}index/repertory`,
            name: 'repertory',
            title: '当日库存',
            component: () => import('@/views/account/today/repertory.vue'),
        }]
    }, {
        path: `${pre}desk`,
        name: 'desk',
        title: '图表-插槽',
        component: () => import('@/views/account/index.vue'),
        fold: true,
        children: [{
            path: `${pre}desk/shift`, //repertory.vue
            name: 'shift',
            title: 'echarts',
            component: () => import('@/views/account/cashierDesk/shift.vue'),
        }, {
            path: `${pre}desk/standby`,
            name: 'standby',
            title: 'slot',
            component: () => import('@/views/account/cashierDesk/standby.vue'),
        }]
    }
]