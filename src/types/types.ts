export interface GameInfo {
  title: string;
  platform: string;
  score: number;
  genre: string;
  editors_choice: boolean;
}

export interface AppState {
  games: Array<GameInfo>;
  filters: AppFilters;
}

export interface AppFilters {
  platformType: string;
  sortBy: string;
  sortOrderAsc: boolean;
}