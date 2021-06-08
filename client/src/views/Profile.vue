<template>
  <div class="container">
    <div class="row avatar">
      <div class="col-md-2 text-center ml-0">
        <img
          src="../assets/town.png"
          alt="Avatar"
          class="rounded-circle img-fluid mt-4"
        />

        <div class="h3 mt-2">
          <p class="text-white">
          {{ currentUser.username }} 
          </p>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <div class="h4">
          <button
            type="button"
            class="btn btn-primary mt-5"
            @click="addListing"
          >
            Add New Item!
          </button>
        </div>
      </div>
      
    </div>
    <div class="row d-flex justify-content-center">
        <div class="h4 mt-2 text-center">
          <p class="text-light text-center">Your Current Listings</p>
        </div>
      </div>
    <div class="row" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <div
        class="col-md-3 mt-4 text-center"
        
        v-for="(listing, index) in listings"
        :key="index"
      >
        <div class="card bg-light" >
          <img class="card-img-top" style="height: 125px" :src="listing.images" alt="">
          <div class="card-body" >
            <p class="title is-5" style="cursor:pointer">
              {{ listing.itemName }}
            </p>
            <p class="subtitle is-6">{{ listing.category }}</p>
            <p class="subtitle is-6">Daily Price ${{ listing.dayPrice }}</p>
            <div 
            class="card-footer bg-transparent border-dark d-flex justify-content-center ">
            <!-- <button class="edit"><i class="fas fa-pen"></i></button> -->
            <button @click="deleteListing(listing.id)" class="edit"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingDataService from "@/services/ListingDataService";

export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      user: {
        id: null,
      },
      listings: [],
      active: false,
      imageUrl: ''
    };
  },
  methods: {
    addListing() {
      this.$router.push("/AddListing");
    },
    mouseOver(){
      this.active = !this.active
    },
    mouseLeave(){
      this.active = !this.active
    },
    

    retrieveListings() {
      ListingDataService.get(this.currentUser.id).then((response) => {
        this.listings = response.data;
      });
    },
    deleteListing(id) {
      ListingDataService.delete(id)
        .then((response) => {
          console.log(response.data);
          this.retrieveListings();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  created() {
    if (this.currentUser) {
      this.user = this.$store.state.auth.user;
      this.retrieveListings();
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.avatar {
  margin-bottom: 20px;
}

.image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.edit {
  border: 0;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
