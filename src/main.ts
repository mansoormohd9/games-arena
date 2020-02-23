import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
