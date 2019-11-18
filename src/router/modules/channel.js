//渠道直连
const pre = '/channel/';

export default [
    {
        path: `${pre}index`,
        name: 'channel',
        title: '入住通',
        fold: true,
        component: () => import('@/views/channel/index.vue'),
        meta: {icon: 'rzt-icon'}
    }, {
        path: `${pre}wx`,
        name: 'wx',
        title: '微信',
        fold: true,
        component: () => import('@/views/channel/wx/wx.vue'),
        meta: {icon: 'wx-icon'}
    }
]