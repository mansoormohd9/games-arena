import {ActionTree, ActionContext} from 'vuex';
import {AppState} from '../types/types';
import * as api from "../utils/api/index";

const actions: ActionTree<AppState, AppState> = {
  async initialize({commit}: ActionContext<AppState, AppState>) {
    const games = await api.getGamesData();
    commit("setGames", games);
  }
};

export default actions;
