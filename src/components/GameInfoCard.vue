<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{game.title}}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        {{game.platform}}
        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">{{game.genre}}</a>
      <a href="#" class="card-footer-item">{{game.score}}</a>
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