import {GetterTree} from 'vuex';
import {AppState, GameInfo} from '../types/types';
import {sortBy} from 'lodash-es';

const getters: GetterTree<AppState, AppState> = {
  getGames(state: AppState): Array<GameInfo> {
    let filteredGames = state.games;
    //filter for platform type
    if(state.filters.platformType) {
      filteredGames = filteredGames.filter(game => game.platform.toLowerCase() === state.filters.platformType.toLowerCase());
    }

    //filter for sort
    if(state.filters.sortBy) {
      filteredGames = _sortBy(filteredGames, state.filters.sortBy);
      if(!state.filters.sortOrderAsc) {
        filteredGames = filteredGames.reverse();
      }
    }
    return filteredGames;
  }
};

export default getters;
