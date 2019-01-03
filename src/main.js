//Polyfill for IE
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

import Vue from 'vue'
import App from './App.vue'

import store from './store'

import VueAxios from 'vue-axios'
import axios from 'axios'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faInfoCircle, faCog, faList, faRedo, faUserAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://localhost:8081/ssbr/api';

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faInfoCircle, faCog, faList, faRedo, faUserAlt);


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
