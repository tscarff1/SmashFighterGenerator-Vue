<template>
  <div id="app">
      <sidebar></sidebar>
    <div id="app-container">
          <fighter-view></fighter-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Portrait from './components/Portrait.vue'
import FighterView from './components/FighterView.vue'
import FighterList from './components/FighterList.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  components: {
    Portrait,
    FighterList,
    Sidebar,
    FighterView
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

#app-container {
  position: absolute;
  width: 90%;
  margin-left: 10%;
}
</style>
