<template>
  <v-app>
    <v-app-bar fixed app color="transparent" elevate-on-scroll>
      <v-btn
        text
        rounded
        depressed
        @click="scrollTo('banner')"
        class="app-bar-btn"
      >
        Home
      </v-btn>
      <v-btn
        text
        rounded
        depressed
        @click="scrollTo('menuCard')"
        class="app-bar-btn"
      >
        Menu
      </v-btn>
      <v-btn
        text
        rounded
        depressed
        @click="scrollTo('contact')"
        class="app-bar-btn"
      >
        Contact
      </v-btn>
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

    scrollTo(className) {
      var my_element = document.getElementById(className);

      if (my_element) {
        my_element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
*::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
  width: 260px;
  border-radius: 13px;
  background-clip: padding-box;
  border: 10px solid transparent;
}

*::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
}

html {
  overflow-y: auto !important;
}
.app-bar-btn.v-btn--active::before {
  opacity: 0;
}
</style>
