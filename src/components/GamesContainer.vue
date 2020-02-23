<template>
  <body>
  <section class="section">
    <div class="container">
      <GameInfoCard v-for="(game, index) in filteredGames" :key="index" :game="game"></GameInfoCard>
    </div>
  </section>
</body>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GameInfo } from '../types/types';
import GameInfoCard from "./GameInfoCard.vue";

@Component({
  components: {
    GameInfoCard
  }
})

export default class GamesContainer extends Vue {
  get filteredGames() {
    return this.$store.getters.filteredGames;
  }
}
</script>