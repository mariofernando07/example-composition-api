<template>
  <h1>Lista de paises</h1>
  <ul class="list-group w-75 mx-auto">
    <router-link
      class="list-group-item"
      :to="`/paises/${pais.name}`"
      v-for="(pais, index) in arrayData"
      :key="index"
    >
      {{ pais.name }}</router-link
    >
  </ul>
</template>

<script>
import { useFetch } from '../hooks/useFetch'
export default {
  setup() {
    return { ...useFetch('https://restcountries.eu/rest/v2/all') };
  },
};
</script>

<style>
</style>