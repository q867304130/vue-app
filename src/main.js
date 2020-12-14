import Vue from 'vue'
import App from './App.vue'

import {axiosTest} from './network/request';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

axiosTest({url:'/home/multidata'})
.then(res => {
  console.log(res);
}).catch(err =>{ console.log(err)})