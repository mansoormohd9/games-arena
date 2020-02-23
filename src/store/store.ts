import { AppState } from "../types/types";

const state: AppState = {
  games : [],
  filters: {
    platformType: "All",
    sortBy: "",
    sortOrderAsc: true
  }
};

export default state;