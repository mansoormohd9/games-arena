import { Vue } from "vue-property-decorator";

export function getJson(url: string) {
  return Vue.axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  })
}