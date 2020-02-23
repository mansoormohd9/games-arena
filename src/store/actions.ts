import {ActionTree, ActionContext} from 'vuex';
import {AppState} from '../types/types';
import * as api from "../utils/api/index";
import gamesData from "../utils/games-data.json";

const actions: ActionTree<AppState, AppState> = {
  async initialize({commit}: ActionContext<AppState, AppState>) {
    //commenting out the below line of code as it seems like cors has not been enabled on the api shared in documentation so reading the data from json file
    //const games = await api.getGamesData();
    const games = gamesData;
    commit("setGames", games);
  }
};

export default actions;