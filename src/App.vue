<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="./assets/logo.png" class="logoImage">
        </div>
      </div>
    </nav>
    <div class="container">
      <Toolbar></Toolbar>
      <GamesContainer></GamesContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Toolbar from "./components/Toolbar.vue";
import GamesContainer from "./components/GamesContainer.vue";

@Component({
  components: {
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
  max-height: 150px !important;
}
</style>
