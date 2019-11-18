import Layout from '@/layout/index.vue';
import home from './modules/home';
import reserve from './modules/reserve';
import account from './modules/account';
import market from './modules/market';
import report from './modules/report';
import system from './modules/system';
import channel from './modules/channel';
import develop from './modules/develop';

export default [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        hidden: false
    }, {
        path: '/',
        component: Layout,
        title: '首页',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'home'},
        children: home,
        hidden: false
    }, {
        path: '/reserve',
        component: Layout,
        title: '预定',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'reserve'},
        children: reserve,
        hidden: false
    }, {
        path: '/account',
        component: Layout,
        title: '账务中心',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'account'},
        children: account,
        hidden: false
    }, {
        path: '/market',
        component: Layout,
        title: '进阶中心',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'market'},
        children: market,
        hidden: false
    }, {
        path: '/report',
        component: Layout,
        title: '报表中心',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'report'},
        children: report,
        hidden: false
    }, {
        path: '/system',
        component: Layout,
        title: '系统设置',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'system'},
        children: system,
        hidden: false
    }, {
        path: '/channel',
        component: Layout,
        title: '渠道直连',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'channel'},
        children: channel,
        hidden: false
    }, {
        path: '/develop',
        component: Layout,
        title: '开发测试',
        meta:{requireAuth: true,icon: 'home'},
        redirect: {name: 'develop'},
        children: develop,
        hidden: false
    }
]