<template>
  <div id="app">
      <sidebar></sidebar>
    <div id="app-container">
      <transition name="fighter">
          <fighter-view v-if="$store.state.currentDisplay == 'FIGHTER'"></fighter-view>
      </transition>
      <transition name="list">
        <fighter-list ref="fighterList" v-if="$store.state.currentDisplay == 'FIGHTER_LIST'"></fighter-list>
      </transition>
      <transition name="settings">
          <settings v-if="$store.state.currentDisplay == 'SETTINGS'"></settings>
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
import Settings from './components/Settings.vue'
import Sidebar from './components/Sidebar.vue'
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
  mounted() {
    this.$store.dispatch('determineIfMobile');
    this.$store.dispatch('selectAllFighters');
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

/* For mobile view, side bar / main view need different proportions*/
@media only screen and (max-width: 320px) {
  #app-container {
    position: absolute;
    width: 250px;
    margin-left: 70px;

  }
}

@media only screen and (min-width: 321px) {
  #app-container {
    position: absolute;
    width: 90vw;
    margin-left: 10vw;

  }
}

.view-header {
        background-color: #b4b4b4;
        border-bottom-style: solid;
        border-bottom-color: rgb(98, 86, 206);
        margin-bottom: 1vw;
        padding-bottom: 5px;
        font-size: 1.3em;
        position: relative;
        z-index: 10;
        box-shadow: 0px 10px 10px rgb(0, 0, 0);
        white-space:nowrap;
        overflow:hidden;
    }

.view-header-item {
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
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
  transition: all .5s;
  opacity: 1;
}

.list-enter {
  margin-left: 100%;
  opacity: 0;
}

.info-enter-active {
  margin-left: 0%;
  transition: margin-left .5s;
}

.info-enter {
  margin-left: 100%;
}

</style>
