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

export interface PaginationModel {
  perPage: number;
  rangeBefore: number;
  rangeAfter: number;
  order: string;
  size: string;
  isSimple: boolean;
  isRounded: boolean;
  prevIcon: string;
  nextIcon: string;
}