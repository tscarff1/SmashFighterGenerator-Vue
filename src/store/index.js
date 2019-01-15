import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    fighter: null,
    isMobile: false,
    currentDisplay: 'FIGHTER',
    selectedFighters: [],
}

const getters = {
    fighterName: (state) => {
        if(state.fighter != null)
            return state.fighter.name;
        else
            return null;
    },
    portraitUrl: (state) => {
        var url = require.context('../assets/portaits/', false, /\.jpg$/);
        //This cleans out any spaces or periods
        
        if(state.fighter == null)
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
    setSelectedFighters:(state, fighters) => {
        state.selectedFighters = fighters;
    },
    selectFighter: (state, fighterId) => {
        state.selectedFighters.push(fighterId);
    },
    deselectFighter: (state, fighterId) => {
        //This loops through the selected fighters until it finds a match for the fighter name and removes the fighter at that index
        for(var ind in state.selectedFighters) {
            if(state.selectedFighters[ind] == fighterId) {
                state.selectedFighters.splice(ind,1);
                break; // Stop from looping through the rest of the fighters
            }
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
        axios.get('/random/single').then(
            (response) => {
             commit('setFighter',response.data);
            }
          );
    },
    setSelectedFighters: ({commit}, fighterList) => {
        commit('setSelectedFighters', fighterList);
    }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})