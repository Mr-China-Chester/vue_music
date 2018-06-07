import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import recommend from './modules/recommend'
import playSongs from './modules/playSongs'
Vue.use(vuex)
export default new vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    recommend,
    playSongs
  }
})
