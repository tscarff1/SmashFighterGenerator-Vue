import Vue from 'vue'
import Vuex from 'vuex'
import  fighterList from '@/assets/data/fighters.json';
import {Settings} from './settings' 
Vue.use(Vuex)

const state = {
    fighter: null,
    isMobile: false,
    currentDisplay: 'FIGHTER',
    selectedFighterIds: []
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
    },
    setSelectedFighterIds: (state, selectedIds) => {
        state.selectedFighterIds = selectedIds;
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
    generateFighter: ({commit,state}) => {
        let randomId = state.selectedFighterIds[Math.floor(Math.random() * state.selectedFighterIds.length)];
        let fighter = null;
        for(let itr of fighterList) {
            if(itr.id == randomId)
                fighter = itr;
        }
        commit('setFighter',fighter);
    },
    setSelectedFighterIds: ({commit}, selectedIds) => {
        commit('setSelectedFighterIds', selectedIds);
    },
    selectAllFighters: ({commit}) => {
        let allIds = [];
        for(let fighter of fighterList) {
            allIds.push(fighter.id);
        }
        commit('setSelectedFighterIds', allIds);
    }
}

const modules = {
    settings: Settings
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})