import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
import 'bootstrap';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';


axios.interceptors.response.use(
  (config) => {
    store.commit('hideLoader');
  return config;
  },
  (error)=> {
    if (error) {
      // const originalRequest = error.config;
      // if ((error.response.status === 401 ||error.response.status === 400) && !originalRequest._retry) {
      //     console.log(error.response,originalRequest,"error");
      //     originalRequest._retry = true;

      //     store.dispatch('ShowMessage',error.response.data.message);
      //     store.dispatch('LogOut');
      //     return router.push('/sign-form/sign-in');
      // }

      console.log(error.response," - error");

      store.commit('hideLoader');
      return Promise.reject(error);
    }
});

axios.interceptors.request.use((config)=>{
  store.commit('showLoader');
  return config;
},(error)=>{
  if(error){
    store.commit('showLoader');
    return Promise.reject(error);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
