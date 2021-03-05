<template>
  <div class="home">
    <div class="container mt-5">
      <div class="row">
        <div class="col-4">
          <p class="welcometext">
            Rent what you need to start working on your creative vision or 
            the items you need for a fun activity from people near you who share your same
            passion.
          </p>
        </div>
        <div class="col-4 musica">
          <img
            src="@/assets/dj-playing-music-mixer.jpg"
            class="center-block"
          />
        </div>
        <div class="col-4 musica">
          <img src="@/assets/woman-travelling-quad-by-th-ocean.jpg" class="center-block" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">

        </div>
        <div class="col-4 sports">
          <img src="@/assets/couple-prepared-enjoy-snow.jpg" class="center-block" />
        </div>
        <div class="col-4 cameras">
          <img
            src="@/assets/photographic-film-near-set-cameras.jpg"
            class="center-block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.background {
  background-color: rgb(255, 255, 255);
}

.musica img {
  width: 100%;
  height: 100%;
  display: block;
}

.sports img {
  width: 100%;
  height: 100%;
  display: block;
}

.cameras img {
  width: 100%;
  height: 100%;
  display: block;
}

.welcometext {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bolder;
  color: rgb(150, 121, 25);
}
</style>
