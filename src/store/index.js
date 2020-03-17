import Vue from 'vue';
import Vuex from 'vuex';
//使用vuex
Vue.use(Vuex);
//创建实例
const store = new Vuex.Store({
  state: {
    theme: {
      tabIndex: 0
    }
  },
  mutations: {
    setTabIndex(state, index) {
      //this.$store.commit('setTabIndex','参数')
      state.theme.tabIndex = index;
    },
  }
})
export default store;