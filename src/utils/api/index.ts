import { getJson } from "./methods";

export function getGamesData() {
  return getJson("http://starlord.hackerearth.com/gamesarena");
}