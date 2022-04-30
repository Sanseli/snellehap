<template>
    <div>
        <div v-if="isNuxtReady">
            <carousel
                :margin="15"
                :stagePadding="10"
                :slideValue="slideController"
                :autoWidth="true"
                :height="1"
                :lazyLoad="true"
                :nav="false"
                :dots="false"
                :rewind="false"
            >
                <v-card
                    v-for="item in menuItem.items"
                    :key="item.name"
                    class="menuItem"
                    :width="cardSize"
                    :height="cardSize"
                >
                    <v-img
                        id="cardImg"
                        height="80%"
                        :src="`menu/${menuItem.slug}/${item.image}`"
                    ></v-img>

                    <v-card-title class="title" style="color: white">{{
                        item.name
                    }}</v-card-title>
                </v-card>
            </carousel>
        </div>

        <div v-else class="skeletonLoaderRow">
            <div v-for="column in 10" :key="column">
                <v-skeleton-loader
                    class="skeletonLoaderCard"
                    type="card"
                    :style="{ height: cardSize + 'px', width: cardSize + 'px' }"
                ></v-skeleton-loader>
            </div>
        </div>

        <div class="carouselButtons">
            <v-btn class="ma-2" text icon @click="slideController--">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-btn class="ma-2" text icon @click="slideController++">
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
            required: true,
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
        cardSize() {
            if (this.$vuetify.breakpoint.sm) {
                return 140;
            }

            return 256;
        },
    },
};
</script>

<style lang="scss">
.menuItem {
    background-color: $color-orange !important;

    .title {
        font-size: 1em !important;
    }
    .v-card__title {
        padding: 9px !important;
    }

    #cardImg {
        background-color: $color-white;
    }
}

.v-skeleton-loader__card-heading {
    background-color: $color-orange !important;
}

.v-skeleton-loader__image {
    background-color: white !important;
}

.spaceBetween > * + * {
    margin-left: 0.5rem;
}

.skeletonLoaderRow {
    display: flex !important;
    padding: 0 10px 0 10px;
    overflow: hidden;
}

.skeletonLoaderCard {
    margin-right: 15px;
    overflow: hidden;
}

.carouselButtons {
    text-align: center;
}
</style>
