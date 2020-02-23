<template>
  <div class="card game-info">
    <header class="card-header">
      <p class="card-header-title">
        {{game.platform}}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options" v-if="game.editors_choice === 'Y'">
        <b-tooltip label="Editor's choice">
            <span class="icon">
              <i class="mdi mdi-star" aria-hidden="true" size="is-medium"></i>
            </span>
        </b-tooltip>
      </a>
    </header>
    <div class="card-content game-content">
      <div class="content">
        {{game.title}}
      </div>
    </div>
    <footer class="card-footer">
      <b-tooltip label="Genre" class="card-footer-item">
          <a href="#">{{game.genre}}</a>
      </b-tooltip>
      <b-tooltip label="Score" class="card-footer-item">
          <a href="#">{{game.score}}</a>
      </b-tooltip>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GameInfo } from '../types/types';

@Component
export default class GameInfoCard extends Vue {
  @Prop({required: true}) game!: GameInfo;
}
</script>

<style scoped>
.card.game-info {
  display: block;
  margin: 10px;
  width: 400px;
  height: 200px;
  float: left;
}
.card-content.game-content {
  height: 100px;
}
</style>