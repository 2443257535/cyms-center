import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
//import HelloWorld from '@/components/HelloWorld'

//import Layout from '@/layout/index';
Vue.use(Router)

import routes from './routes';

const router = new Router({
    routes
})

router.beforeEach((to,from,next) => {
    if(to.path === '/login'){
        next()
        return
    }
    if(to.hidden == undefined){
        if(store.getters.username != '' && store.getters.username != undefined){
            next();
        }else{
            next('/login')
        }
    }else{
        next()
    }
})

// const routes = new Router({
//     routes
// })
export default router;
