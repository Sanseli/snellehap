<template>
    <div>
        <banner />
        <div id="content">
            <about/>
            <menu-card />
        </div>
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
#content {
    background: rgb(240, 240, 240);
    background: radial-gradient(
        circle,
        rgba(240, 240, 240, 1) 31%,
        rgba(230, 230, 230, 1) 65%,
        rgba(209, 209, 209, 1) 88%,
        rgba(190, 190, 190, 1) 100%
    );

    padding: 5rem 0 5rem 0;
    @media only screen and (min-width: 768px) {
        padding: 10rem 0 10rem 0
    }
}

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
