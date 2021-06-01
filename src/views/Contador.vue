<template>
  <Titulo :contador="contador"/>
  <Btn class="mr-1" :texto="'Aumentar'" @accion="aumentar"/>
  <Btn :texto="'Disminuir'" @accion="disminuir"/>
</template>

<script>
import { useContador } from "../hooks/useContador";
import Btn from "@/components/Btn";
import Titulo from "@/components/Titulo";
export default {
  components: {
    Btn,
    Titulo
  },
  setup() {
    return { ...useContador() };
  },
};
</script>

<style>
</style>