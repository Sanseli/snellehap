<template>
<div>
  <div v-if="isNuxtReady">
    <carousel
      :margin="15"
      :items="columns"
      :stagePadding="10"
      :dots="false"
      :nav="false"
      :slideValue="slideController"
      :lazyLoad="true"
    >
      <v-card
        v-for="item in menuItem.items"
        :key="item.name"
        class="menuItem"
        width="300"
        height="256"
      >
        <v-img style="background:white" height="80%" :src="`menu/${menuItem.slug}/${item.image}`"></v-img>

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
  
  <div v-else class="skeletonLoaderRow">
    <div v-for="column in columns" :key="column">
    <v-skeleton-loader
      type="card"
      style="width: 275.04px; height: 300px; margin-right: 15px;"
    ></v-skeleton-loader>
    </div>
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
        vm.isNuxtReady = true;
      });
    }
  },
  computed: {
    columns() {
      // if (this.$vuetify.breakpoint.xl) {
      //   return 4;
      // }

      if (this.$vuetify.breakpoint.lg) {
        return 5;
      }

      // if (this.$vuetify.breakpoint.md) {
      //   return 2;
      // }

      // if (this.$vuetify.breakpoint.sm) {
      //   return 2;
      // }

      return 2;
    }
  }
};
</script>

<style lang="scss">
.menuItem {
  background-color: #b86c30 !important; 

  .title {
    font-size: 1em !important;
    
    
  }
.v-card__title {
      padding: 9px !important;
    }
  
}
.v-skeleton-loader__card-heading {
    background-color: #b86c30 !important;
  }
  .v-skeleton-loader__image {
    background-color: white !important;
  }
.spaceBetween > * + * {
  margin-left: 0.5rem;
}

.skeletonLoaderRow {
  display: flex !important;
  padding: 0 10px 0 10px ;
}
</style>
