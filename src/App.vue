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
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  components: {
    FighterList,
    Sidebar,
    FighterView,
    Info
  }, 
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.$store.dispatch('determineIfMobile');
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
  overflow: hidden !important;
  margin: 0 0 0 0;
}

html {
  height: 100%;
}

@media only screen and (max-width: 320px) {
  #app-container {
    position: absolute;
    width: 220px;
    margin-left: 100px;

  }
}

@media only screen and (min-width: 321px) {
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
