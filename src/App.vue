<template>
  <div id="app">
      <sidebar></sidebar>
    <div id="app-container">
      <transition name="fighter">
          <fighter-view v-if="$store.state.currentDisplay == 'FIGHTER'"></fighter-view>
      </transition>
      <transition name="list">
        <fighter-list v-if="$store.state.currentDisplay == 'FIGHTER_LIST'"></fighter-list>
      </transition>
      <transition name="settings">
        <settings v-if="$store.state.currentDisplay == 'SETTINGS'"> </settings>
      </transition>
      <transition name="info">
          <info v-if="$store.state.currentDisplay == 'INFO'"></info>
      </transition>
    </div>
  </div>
</template>

<script>
import FighterView from './components/FighterView.vue'
import FighterList from './components/FighterList.vue'
import Info from './components/Info.vue'
import Settings from './components/Settings.vue';
import Sidebar from './components/Sidebar.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    FighterList,
    Sidebar,
    FighterView,
    Settings,
    Info
  }, 
  data() {
    return {
      isMobile: false
    }
  },
  created() {
    this.$store.dispatch('determineIfMobile');
    axios.get('/data/fighters').then(
      (response) => {
        this.$store.dispatch('setAllFighters', response.data);
      }
    );
    this.getRandomFighter();
  },
  methods: {
    getRandomFighter() {
      this.$store.dispatch('generateFighter');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background-color: #212121;
}

body {
  height: 100%;
  overflow-y: hidden;
  margin: 0 0 0 0;
}

html {
  height: 100%;
  overflow-y: hidden;
  background-color: #212121;
}

/* Remove button outline on mobile */
button:focus {
  outline: 0;
}

/* For mobile view, side bar / main view need different proportions*/
#app-container {
    position: absolute;
    width: 80vw;
    margin-left: 20vw;

  }

@media only screen and (min-width: 800px) {
  #app-container {
    position: absolute;
    width: 90vw;
    margin-left: 10vw;

  }
}

/* -------------------------------------------------- */
/* Animations */
/* -------------------------------------------------- */
.fighter-enter-active {
  margin-left: 0%;
  transition: margin-left .5s, opacity .5s;
  opacity: 1;
}

.fighter-enter {
  margin-left: 100%;
  opacity: 0;
}

.list-enter-active {
  margin-left: 0%;
  transition: margin-left .5s;
}

.list-enter {
  margin-left: 100%;
}

.info-enter-active {
  margin-left: 0%;
  transition: margin-left .5s;
}

.info-enter {
  margin-left: 100%;
}
</style>
