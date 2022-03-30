<template>
  <v-app>
    <v-app-bar fixed app dense flat color="transparent">
      <v-spacer />
      <v-btn text to="/">Home</v-btn>
      <v-btn text @click="toWebshop()">Webshop</v-btn>
    </v-app-bar>

    <Nuxt />
  </v-app>
</template>

<script>
export default {
  methods: {
    toWebshop() {
      let routeData = this.$router.resolve({ name: "webshop", query: {} });
      window.open(routeData.href, "_self");
    },
  },
};
</script>

<style scoped>
#app {
  background: rgb(223, 183, 155);
  background: radial-gradient(
    circle,
    rgba(223, 183, 155, 1) 29%,
    rgba(233, 175, 138, 1) 57%,
    rgba(233, 174, 134, 1) 65%,
    rgba(242, 165, 111, 1) 88%,
    rgba(246, 161, 104, 1) 100%
  );
}
</style>

<style>
html {
  overflow-y: auto !important;
}
</style>
