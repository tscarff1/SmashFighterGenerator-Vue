import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    fighter: null,
    isMobile: false,
    currentDisplay: 'FIGHTER',
}

const getters = {
    fighterName: (state) => {
        if(state.fighter != null)
            return state.fighter.name;
        else
            return null;
    }
}

const mutations = {
    setFighter: (state, fighter) => {
        state.fighter = fighter;
    },
    setIsMobile: (state, isMobile) => {
        state.isMobile = isMobile;
    },
    setCurrentDisplay: (state, display) => {
        state.currentDisplay = display;
    }
}

const actions = {
    setFighter: ({commit}, fighter) => {
        commit('setFighter', fighter);
    },
    determineIfMobile: ({commit}) => {
        var ua = navigator.userAgent;
        var isMobile = false;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
            isMobile = true;
        else if(/Chrome/i.test(ua))
            isMobile = false;
        commit('setIsMobile', isMobile);
    },
    setCurrentDisplay: ({commit}, display) => {
        commit('setCurrentDisplay', display);
    },
    generateFighter: ({commit}) => {
        axios.get('/random/single').then(
            (response) => {
             commit('setFighter',response.data);
            }
          );
    }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})