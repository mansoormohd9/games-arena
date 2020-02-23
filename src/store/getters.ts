import {GetterTree} from 'vuex';
import {AppState, GameInfo, AppFilters} from '../types/types';
import { sortBy } from "lodash-es";

const getters: GetterTree<AppState, AppState> = {
  filteredGames(state: AppState): Array<GameInfo> {
    let filteredGames = state.games;
    //filter for platform type
    if(state.filters.platformType != "All") {
      filteredGames = filteredGames.filter(game => game.platform.toLowerCase() === state.filters.platformType.toLowerCase());
    }

    //filter for sort
    if(state.filters) {
      filteredGames = sortBy(filteredGames, ['score']);
      if(!state.filters.sortOrderAsc) {
        filteredGames = filteredGames.reverse();
      }
    }
    return filteredGames;
  },
  sortType(state: AppState) {
    return state.filters.sortOrderAsc;
  }
};

export default getters;
