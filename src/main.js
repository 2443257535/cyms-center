// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss';

import store from './store';

// request 封装axios;
import http from '@/servers/request.js';
import axios from 'axios';


//import MenuUtils from '@/untils/MenuUtils';

//图表
import echarts from 'echarts'


//导航栏折叠
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin)

Vue.use(store);


Vue.use(ElementUI);

Vue.prototype.http = http;
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
