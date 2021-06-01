import { onMounted, ref } from "vue";

export function useFetch(url) {
  const arrayData = ref([])

  onMounted(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      arrayData.value = data;
    } catch (error) {
      console.log(error)
      // const res = await fetch("api.json");
      // const data = await res.json();
      // arrayData.value = data;
    }

  })
  return { arrayData }
}