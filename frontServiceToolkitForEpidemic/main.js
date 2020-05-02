import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';
Vue.prototype.$serverUrl = 'http://119.3.185.241:8080/';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()