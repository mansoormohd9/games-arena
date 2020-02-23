import {MutationTree} from 'vuex';
import {
  AppState, GameInfo,
} from '../types/types';

const mutations: MutationTree<AppState> = {
  setGames(state: AppState, games: Array<GameInfo>) {
    state.games = games;
  }
};

export default mutations;
