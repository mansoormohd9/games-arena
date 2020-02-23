import Vue from 'vue'
import Vuex from 'vuex'
import state from "../store/store";
import actions from '../store/actions';
import getters from '../store/getters';
import mutations from '../store/mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})