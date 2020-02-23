<template>
<body>
  <section class="section">
    <div class="container">
      <GameInfoCard v-for="(game, index) in paginatedItems" :key="index" :game="game"></GameInfoCard>
      <b-pagination
        :total="totalPages"
        :current.sync="currentPage"
        :range-before="paginationModel.rangeBefore"
        :range-after="paginationModel.rangeAfter"
        :order="paginationModel.order"
        :size="paginationModel.size"
        :simple="paginationModel.isSimple"
        :rounded="paginationModel.isRounded"
        :per-page="paginationModel.perPage"
        :icon-prev="paginationModel.prevIcon"
        :icon-next="paginationModel.nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      ></b-pagination>
    </div>
  </section>
</body>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GameInfoCard from "./GameInfoCard.vue";
import { slice } from "lodash-es";
import { PaginationModel } from "../types/types";

@Component({
  components: {
    GameInfoCard
  }
})
export default class GamesContainer extends Vue {
  paginationModel: PaginationModel = this.initializePaginationModel();
  currentPage = 1;

  initializePaginationModel() {
    return {
      perPage: 6,
      rangeBefore: 1,
      rangeAfter: 1,
      order: "is-centered",
      size: "is-medium",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  }

  get totalPages() {
    return this.filteredGames ? this.filteredGames.length : 0;
  }

  get filteredGames() {
    return this.$store.getters.filteredGames;
  }

  get paginatedItems() {
    const nextElem = this.currentPage * this.paginationModel.perPage - 1;
    return slice(
      this.filteredGames,
      nextElem,
      nextElem + this.paginationModel.perPage
    );
  }
}
</script>