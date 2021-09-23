import 'va/lib/css'
import 'va/lib/script'
import 'va/lib/global'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import EventBus from 'va/lib/eventBus.js'
import axios from 'axios'

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
