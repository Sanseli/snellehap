<template>
  <div class="background">
    <div class="banner">
      <img src="logo/logo.svg" alt="logo" class="logo" />

      <h1 style="font-family: Bauhaus 93; color: #7f001e" class="text-primary">
        Opent binnenkort!
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
  width: 100vw;
  position: absolute;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  height: 70vh;
  align-self: center;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    height: auto;
  }
}
</style>
