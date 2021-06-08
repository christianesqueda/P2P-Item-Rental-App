import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions'
import mutations from './mutations'
import state from './state'
import { listingData } from './listing.module'

import { auth } from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // getters,
  modules: {
    auth,
    listingData,
  }
});