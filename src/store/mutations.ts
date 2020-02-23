import {MutationTree} from 'vuex';
import {
  AppState, GameInfo,
} from '../types/types';

const mutations: MutationTree<AppState> = {
  setGames(state: AppState, games: Array<GameInfo>) {
    state.games = games;
  },
  updateSortType(state: AppState) {
    state.filters.sortOrderAsc = !state.filters.sortOrderAsc;
  },
  updatePlatformFilter(state: AppState, filter: string) {
    state.filters.platformType = filter;
  },
  updateSearch(state: AppState, searchText: string) {
    state.filters.searchText = searchText;
  }
};

export default mutations;
