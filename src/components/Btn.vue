<template>
  <!-- <button class="btn btn-outline-dark" @click="$emit('accion')">
    {{ texto }}
  </button> -->
  <button class="btn btn-outline-dark" @click="accionBtn">{{ texto }}</button>
</template>

<script>
export default {
  props: ["texto"],
  setup(_props, ctx) {
    const accionBtn = () => {
      ctx.emit("accion");
    };
    return { accionBtn };
  },
};
</script>

<style>
</style>