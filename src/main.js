// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import VueAxios from 'vue-axios'
import axios from './util/axios'
import './permission' // 权限

Vue.use(VueMomentJS, moment);
Vue.use(VueAxios, axios)

import './element-ui'

import '@/styles/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
