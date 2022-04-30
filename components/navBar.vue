<template>
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
</template>

<script>
import scrollToElementMixin from "@/mixins/scrollToElementMixin.js";
export default {
  mixins: [scrollToElementMixin],
  methods: {
    // toWebshop() {
    //   let routeData = this.$router.resolve({ name: "webshop", query: {} });
    //   window.open(routeData.href, "_self");
    // },
  },
};
</script>
