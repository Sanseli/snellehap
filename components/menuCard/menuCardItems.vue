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
                        height="78%"
                        :src="`menu/${menuItem.slug}/${item.image}`"
                    ></v-img>

                    <v-chip id="cardChip" v-if="item.price">
                        €{{ item.price.toFixed(2).replace(".", ",") }}
                    </v-chip>

                    <v-card-title class="title">{{ item.name }}</v-card-title>
                </v-card>
            </carousel>
        </div>

        <!-- <div v-else class="skeletonLoaderRow">
            <div v-for="column in 10" :key="column">
                <v-skeleton-loader
                    class="skeletonLoaderCard"
                    type="card"
                    :style="{ height: cardSize + 'px', width: cardSize + 'px' }"
                ></v-skeleton-loader>
            </div>
        </div> -->

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
                this.isNuxtReady = true;
            });
        }
    },

    computed: {
        cardSize() {
            if (process.browser && window.innerWidth < 600) {
                return 150;
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
        white-space: initial;
        word-break: break-word;
        line-height: 1em;

        @media screen and (min-width: 800px) {
            font-size: 1em !important;
        }

        @media only screen and (max-width: 600px) {
            font-size: 0.85em !important;
        }
    }
    .v-card__title {
        align-content: center;

        @media screen and (min-width: 800px) {
            height: 3.6em;
            padding-left: 1em !important;
            padding-right: 1em !important;
        }

        @media only screen and (max-width: 600px) {
            height: 2.5em;
            padding-left: 0.5em !important;
            padding-right: 0.5em !important;
        }
    }

    #cardImg {
        background-color: white;
    }

    #cardChip {
        position: absolute !important;
        top: 0;
        right: 0;
        margin: 5px;
        background-color: $color-orange;
        color: $color-white;
    }

    .title {
        color: $color-white;
    }
}

.v-skeleton-loader__card-heading {
    background-color: $color-orange !important;
}

.v-skeleton-loader__image {
    background-color: white !important;
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

<style scoped>
.spaceBetween > * + * {
    margin-left: 0.5rem;
}
</style>
