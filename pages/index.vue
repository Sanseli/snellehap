<template>
    <div>
        <banner />
        <menu-card />
        <contact />
        <footer-element />
        <v-btn id="jumpToTopBtn" elevation="2" fab @click="scrollTo('banner')"
            ><v-icon>mdi-chevron-up</v-icon></v-btn
        >
    </div>
</template>

<script>
import scrollToElementMixin from "@/mixins/scrollToElementMixin.js";

export default {
    mixins: [scrollToElementMixin],
};
</script>

<style lang="scss" scoped>
#jumpToTopBtn {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 2rem;
    height: 4.5rem;
    width: 4.5rem;
    z-index: 1;
    background-color: #5e2400;
    color: white;

    @media only screen and (max-width: 600px) {
        visibility: hidden;
    }

    .v-icon {
        font-size: 3rem !important;
    }
}
</style>
