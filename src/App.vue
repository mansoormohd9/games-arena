<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="./assets/logo.png" class="logoImage">
        </div>
      </div>
    </nav>
    <Toolbar></Toolbar>
    <GamesContainer></GamesContainer>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Toolbar from "./components/Toolbar.vue";
import GamesContainer from "./components/GamesContainer.vue";

@Component({
  components: {
    HelloWorld,
    GamesContainer,
    Toolbar
  },
})
export default class App extends Vue {
  created() {
    this.$store.dispatch("initialize");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar-item img {
  width: 400px;
  max-height: 125px !important;
}
</style>
