<template>
    <div class="container">
      <!-- <div class="row">
        <div class="col-12 mx-auto">
          <form class="form-inline mx-auto">
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group">
                <input
                  type="search"
                  placeholder="What're you searching for?"
                  aria-describedby="button-addon1"
                  class="form-control border-0 bg-light"
                />
                <div class="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    class="btn btn-link text-primary"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> -->
      <div class="row py-2 bg-dark">
        <div class="col-4">
          <p class="welcometext">
            Rent what you need to start working on your creative vision or the
            items you need for a fun activity from people near you who share
            your same passion.
          </p>
          
        </div>
        <div class="col-4 bg-dark musica">
          <img src="@/assets/dj-playing.png" class="center-block" />
        </div>
        <div class="col-4 musica">
          <img
            src="@/assets/woman-travelling-quad-by-th-ocean.jpg"
            class="center-block"
          />
        </div>
      </div>
      <div class="row bg-dark py-2">
        
        <div class="col-4">
          <p class="welcometext">
            Create a free account in order to start posting items you would like to 
            rent to others. Similarly, having an account will allow you to find items you're
            looking for and rent them.
          </p>
        </div>
        <div class="col-4 sports">
          <img
            src="@/assets/snowboard-couple.png"
            class="center-block"
          />
        </div>
        <div class="col-4 cameras">
          <img
            src="@/assets/photographic-film-near-set-cameras.jpg"
            class="center-block"
          />
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
  font-family: Merriweather, serif;
  font-weight: bolder;
  color: rgb(255, 255, 255);
}

.container{
  height: 100vh;
  width: 100vw;
}



</style>
