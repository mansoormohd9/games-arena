import { AppState } from "../types/types";

const state: AppState = {
  games : [],
  filters: {
    searchText: "",
    platformType: "All",
    sortBy: "",
    sortOrderAsc: true
  }
};

export default state;