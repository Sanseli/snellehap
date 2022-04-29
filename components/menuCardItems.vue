<template>
  <div>
    <carousel
      v-if="isNuxtReady"
      :margin="15"
      :items="5"
      :stagePadding="10"
      :dots="false"
      :nav="false"
      :slideValue="slideController"
      :lazyload="true"
    >
      <v-card
        v-for="item in menuItem.items"
        :key="item.name"
        class="menuItem"
        width="300"
        height="300"
        style=""
      >
        <v-img height="80%" :src="`menu/${menuItem.slug}/${item.image}`"></v-img>

        <v-card-title class="title" style="color: white">{{ item.name }}</v-card-title>
      </v-card>
    </carousel>

    <div style="text-align: center">
      <v-btn class="ma-2" text icon @click="slideController++">
        <v-icon>mdi-chevron-left</i></v-icon>
      </v-btn>

      <v-btn class="ma-2" text icon @click="slideController--">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
const carousel = () =>
  window && window !== undefined ? import("xx-vue-owl-carousel") : null;

export default {
  components: { carousel },
  data() {
    return {
      isNuxtReady: false,
      slideController: 0,
    };
  },
  props: {
    menuItem: {
      type: Object,
      required: true
    },
  },
  mounted() {
    const vm = this;
    if (process.browser) {
      window.onNuxtReady((app) => {
        console.log("Nuxt ready!");
        vm.isNuxtReady = true;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.menuItem {
  background-color: #b86c30 !important; 

  .title {
    font-size: 1em !important;
  }
}

.spaceBetween > * + * {
  margin-left: 0.5rem;
}
</style>
