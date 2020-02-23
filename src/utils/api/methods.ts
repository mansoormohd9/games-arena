import { Vue } from "vue-property-decorator";

export function getJson(url: string) {
  return Vue.axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'accept': 'application/json',
    },
    data: {}
    }).then((response) => {
    console.log(response.data);
    return response.data;
  })
}