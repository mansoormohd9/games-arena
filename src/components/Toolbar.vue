<template>
  <section class="section">
    <b-field grouped>
      <b-field>
        <b-input placeholder="Search by name..." type="search" icon="magnify"></b-input>
        <p class="control">
          <button class="button is-primary">Search</button>
        </p>
      </b-field>
      <b-field>
        <b-select v-model="platformTypeFilter">
          <option v-for="(platformType, index) in platformTypes" :key="index" v-on:input="updateTypeFilter">{{platformType}}</option>
        </b-select>
      </b-field>
      <b-field>
        <b-button type="is-primary" v-on:click="updateSortType">
          <b-icon
                :icon="sortType ? 'mdi mdi-arrow-up-bold' : 'mdi mdi-arrow-down-bold'"
                size="is-small">
            </b-icon>
        </b-button>
      </b-field>
    </b-field>
    
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { map } from "lodash-es";
import { GameInfo } from '../types/types';

@Component
export default class Toolbar extends Vue {
  platformTypeFilter = "All";
  platformTypes: Array<any> = [];

  created() {
    this.platformTypes = [...new Set(map(this.$store.state.games.map((x: GameInfo) => x.platform)))];
    this.platformTypes.push("All");
  }

  get sortType() {
    return this.$store.getters.sortType;
  }

  updateSortType() {
    this.$store.commit("updateSortType")
  }

  @Watch('platformTypeFilter') 
  updateTypeFilter() {
    this.$store.commit("updatePlatformFilter", this.platformTypeFilter)
  }
}
</script>