import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    fighter: null,
    isMobile: false, //Not currently used for anything. I'm leaving it in case I ever do use it
    currentDisplay: 'FIGHTER',
    selectedFighters: [],
    allFighters: []
}

const getters = {
    fighterName: (state) => {
        if(state.fighter != null)
            return state.fighter.name;
        else
            return null;
    },
    portraitUrl: (state) => {
        var baseURL = process.env.BASE_URL;
        //This cleans out any spaces or periods
        if(state.fighter == null)
            return '';
        else {
            var name = state.fighter.name.split('.').join('').split(' ').join('').split('-').join('');
            return require('@/assets/portaits/SmashUlt_' + name + '.jpg');
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
    },
    setSelectedFighters:(state, fighters) => {
        state.selectedFighters = fighters;
    },
    generateFighter:(state) => {
        axios.post('/random/single/in',state.selectedFighters).then(
            (response) => {
                state.fighter = response.data;
            }
        );
    },
    setAllFighters: (state, allFighters) => {
        state.allFighters = allFighters;
        for(var ind in allFighters) {
            state.selectedFighters.push(allFighters[ind].id);
        }
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
        commit('generateFighter');
    },
    setSelectedFighters: ({commit}, fighterList) => {
        commit('setSelectedFighters', fighterList);
    },
    setAllFighters: ({commit}, allFighters) => {
        commit('setAllFighters', allFighters);
    }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})