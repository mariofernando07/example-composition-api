<template>
  <div class="home">
    <h1 :style="{ color: color }">contador: {{ contador }}</h1>
    <button class="btn btn-outline-dark mr-2" @click="aumentar">+</button>
    <button class="btn btn-outline-dark" @click="disminuir">-</button>
  </div>
</template>

<script>
// api de opciones

export default {
  name: "Home",
  components: {},
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    aumentar() {
      this.contador += 1;
    },
    disminuir() {
      this.contador -= 1;
    },
  },
  computed: {
    color() {
      return this.contador < 0 ? "red" : "blue";
    },
  },
};
</script>
