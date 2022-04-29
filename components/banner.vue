<template>
  <div class="background">
    <div class="banner">
      <img src="logo/logo.png" alt="logo" class="logo" />

      <h1 style="font-family: Bauhaus 93; color: #7f001e" class="text-primary">
        <!--  -->
      </h1>
      <a href="https://goo.gl/maps/QbnRgaVU8LyE7Vx4A" target="_blank"
        >Markt 5, 3980 Tessenderlo</a
      >
      <a href="tel:0471 95 1977">0471 95 1977</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url(//db.onlinewebfonts.com/c/89d11a443c316da80dcb8f5e1f63c86e?family=Bauhaus+93);
.banner {
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
