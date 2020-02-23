import { Vue } from "vue-property-decorator";

export function getJson(url: string) {
  Vue.axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  })
}