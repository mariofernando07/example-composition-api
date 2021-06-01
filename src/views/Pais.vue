<template>
  <!-- Opcion 1 -->
  <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
  <h1>{{ nombre }}</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    {{ JSON.stringify(pais) }}
  </p>
</template>

<script>
import { useRoute } from "vue-router"; //opcion 3
import { useFetch } from "../hooks/useFetch";
export default {
  // props: ["nombre"], // opcion 2
  setup(props, ctx) {
    // console.log(props.nombre);
    const nombre = useRoute().params.nombre;
    console.log(nombre);
    return {
      ...useFetch(`https://restcountries.eu/rest/v2/name/${nombre}`),
      nombre,
    };
  },
};
</script>

<style>
</style>