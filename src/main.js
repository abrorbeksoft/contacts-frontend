import Vue from 'vue'
import main from "@/components/mainComponent";

import router from './router/index'
import store from "./store/index"

Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(main),
}).$mount('#app')
