// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// import { Button ,Popup,DatetimePicker , Toast } from 'vant'
// import 'vant/lib/vant-css/index.css'

// Vue.use(Button)
// Vue.use(Popup)
// Vue.use(DatetimePicker)
// Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
