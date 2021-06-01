<template>
  <div class="about">
    <Titulo :contador="contador"/>
    <Btn class="mr-1" texto="+" @accion="aumentar"></Btn>
    <Btn texto="-" @accion="disminuir"></Btn>
    <!-- <button class="btn btn-outline-dark mr-2" @click="aumentar">+</button>
    <button class="btn btn-outline-dark" @click="disminuir">-</button> -->
    <hr>
    <input class="form-control w-75 mx-auto" type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>
<script>
// composition api
import { ref } from "vue";
import Titulo from "@/components/Titulo";
import Btn from "@/components/Btn";
export default {
  components: {
    Titulo,
    Btn,
  },
  setup() {
    const contador = ref(0);
    const aumentar = () => {
      contador.value++;
    };

    const disminuir = () => {
      contador.value--;
    };

    const texto = ref("");
    return { contador, aumentar, disminuir, texto };
  },
};
</script>
