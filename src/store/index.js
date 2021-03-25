import Vue from 'vue'
import Vuex from 'vuex'
import  fighterList from '@/assets/data/fighters.json';
Vue.use(Vuex)

const state = {
    fighter: null,
    isMobile: false,
    currentDisplay: 'FIGHTER',
}

const getters = {
    fighterName: (state) => {
        if(state.fighter && state.fighter.name)
            return state.fighter.name;
        else
            return null;
    },
    portraitUrl: (state) => {
        var url = require.context('../assets/portaits/', false, /\.jpg$/);
        //This cleans out any spaces or periods
        
        if(!state.fighter || !state.fighter.name)
            return '';
        else {
            var name = state.fighter.name.split('.').join('').split(' ').join('').split('-').join('');
            return url('./SmashUlt_' + name + '.jpg');
        }
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
        commit('setFighter',Math.floor(Math.random() * fighterList.length));
    }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})