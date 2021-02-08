import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  getters:{
    getLoading:(state)=>state.isLoading,
  },
  mutations: {
    hideLoader(state){
      state.isLoading = false;
    },
    showLoader(state){
      state.isLoading = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
