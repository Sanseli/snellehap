<template>
  <div id="banner" class="background">
    <img src="logo/logo.png" alt="logo" class="logo" />

    <h1 style="font-family: Bauhaus 93; color: #7f001e" class="text-primary">
      <!--  -->
    </h1>

    <v-btn
      elevation="9"
      @click="scrollTo('menuCard')"
      large
      raised
      x-large
      style="
        background-color: #7f001e;
        color: white;
        width: fit-content;
        align-self: center;
      "
      >Bekijk ons menu!</v-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
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

<style lang="scss">
@import url(//db.onlinewebfonts.com/c/89d11a443c316da80dcb8f5e1f63c86e?family=Bauhaus+93);
#banner {
  width: auto;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.logo {
  height: 59vh;
  align-self: center;
  margin-bottom: 1.2em;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    height: auto;
  }
}
</style>
