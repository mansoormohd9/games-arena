import {GetterTree} from 'vuex';
import {AppState, GameInfo } from '../types/types';
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

    //search text
    if(state.filters.searchText) {
      filteredGames = filteredGames.filter(x => x.title.toLowerCase().indexOf(state.filters.searchText.toLowerCase()) != -1);
    }

    return filteredGames;
  },
  sortType(state: AppState) {
    return state.filters.sortOrderAsc;
  }
};

export default getters;
