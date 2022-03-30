<template>
  <div class="background">
    <div class="banner">
      <img
        src="logo/logo.png"
        alt="logo"
        style="height: 60vh; width: 60vh; align-self: center"
      />

      <h1 style="font-family: Bauhaus 93" class="text-primary">
        Opent binnenkort!
      </h1>
      <a href="https://goo.gl/maps/QbnRgaVU8LyE7Vx4A" target="_blank"
        >Markt 5, 3980 Tessenderlo</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/89d11a443c316da80dcb8f5e1f63c86e?family=Bauhaus+93);

.background {
  background: url("/background/blurry-gradient1.svg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: center;
}
.banner {
  width: 100vw;
  position: absolute;
  text-align: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
