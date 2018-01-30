import Vue from 'vue';
import Vuex from 'vuex';
import {mutations} from '@/store/mutations'
import {getters} from '@/store/getters'
Vue.use(Vuex);

const state = {
    locales:"111"
}
export default new Vuex.Store({
    state,
    mutations,
    getters
});
