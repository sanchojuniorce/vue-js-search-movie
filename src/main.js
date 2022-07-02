import Vue from 'vue'
import App from './App.vue'
import Lista from './components/Lista.vue'

Vue.config.productionTip = false
Vue.component('Lista',Lista)

new Vue({
  render: h => h(App),
}).$mount('#app')
