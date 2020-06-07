import Vue from 'vue'
import App from './App.vue'
import YlUi from '../packages'
Vue.config.productionTip = false
Vue.use(YlUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
