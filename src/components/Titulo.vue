<template>
  <h1 :style="{ color: color }">Contador: {{ contador }}</h1>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["contador"],
  setup(props) {
    const color = computed(() => {
      if (props.contador < 0) return "red";
      return "blue";
    });

    return { color };
  },
};
</script>
<style>
</style>