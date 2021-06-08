<template>
  <div class="container">
    <form >
      <div class="row">
        <div
          v-if="message"
          :class="`message ${error ? 'is-danger' : 'is-success'}`"
        >
          <div class="message-body">{{ message }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 text-center mx-5">
          <div class="form-group mt-4">
            <label for="category"><strong> Category </strong></label>
            <select v-model="item.category" class="form-control">
              <option value="" selected disabled
                >- Please Select an Option -</option
              >
              <option value="audioEquip">Audio Equipment</option>
              <option value="videoEquip">Video Equipment</option>
              <option value="sports">Sports</option>
              <option value="partyEvents">Party and Events</option>
              <option value="homeGarden">Home and Garden</option>
              <option value="office">Office</option>
              <option value="electronics">Electronics</option>
              <option value="instruments">Instruments</option>
            </select>
          </div>
          <div class="form-group mt-4">
            <label for="itemName"><strong>Item Name</strong></label>

            <input
              type="text"
              placeholder="e.g. Karaoke Machine"
              size="40"
              class="form-control"
              v-model="item.itemName"
            />
          </div>
          <div class="form-group mt-4">
            <label for="description"><strong>Description</strong></label>
            <input
              type="textarea"
              class="form-control"
              placeholder="e.g. A karaoke machine is perfect for social ocassions."
              size="40"
              v-model="item.description"
            />
          </div>

        </div>

        <div class="container col-md-5 mt-4 text-center">
          <span><strong>Rental Price</strong></span>
          <br />
          <label class="mt-4" for="itemName"><strong>Daily</strong></label>

          <input
            type="number"
            v-model="item.dayPrice"
            placeholder="$0.00"
            size="10"
            class="form-control"
          />
          <label class="mt-4" for="itemName"><strong>Weekly</strong></label>
          <input
            type="number"
            v-model="item.weekPrice"
            placeholder="$0.00"
            size="10"
            class="form-control"
          />
          <label class="mt-4" for="itemName"><strong>Monthly</strong></label>
          <input
            type="number"
            v-model="item.monthPrice"
            placeholder="$0.00"
            size="10"
            class="form-control"
          />
          <label class="mt-4" for="itemName"><strong>Item Value</strong></label>
          <input
            type="number"
            v-model="item.itemValue"
            placeholder="$0.00"
            size="10"
            class="form-control"
          />
          <label class="mt-4" for="itemName"
            ><strong>Minimum Rental Days</strong></label
          >
          <input
            type="number"
            v-model="item.minRentalDays"
            placeholder=""
            size="10"
            class="form-control"
          />
          <label class="mt-4" for="itemName"><strong>Zip Code</strong></label>
          <input
            type="number"
            v-model="item.zipCode"
            placeholder="e.g. 90210"
            size="10"
            class="form-control"
          />
          <div class="row">
            <div class="col-md-5 mx-5 p-4 ">
              <button @click.prevent="createListing()">Save</button>
            </div>
            <div class="col-md-5 mx-5 p-4 ">
              <button @click.prevent="nextPage()">Next</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ListingDataService from "@/services/ListingDataService";

export default {
  name: "AddListing",
  computed: {
    userId() {
      return this.$store.state.auth.user.id;
    },
  },

  data() {
    return {
      message: "",
      item: {
        id: null,
        category: "",
        itemName: "",
        description: "",
        dayPrice: "",
        weekPrice: "",
        monthPrice: "",
        zipCode: "",
        itemValue: "",
        minRentalDays: "",
      },
      remoteUrl: "",
    };
  },
  methods: {


    nextPage(){

      this.$router.push("/AddImages");
      this.$store.dispatch('listingData/resetState')
      this.$store.dispatch('listingData/setId', this.item.id)
    
    },

    createListing() {



      var data = {
        itemName: this.item.itemName,
        category: this.item.category,
        description: this.item.description,
        dayPrice: this.item.dayPrice,
        weekPrice: this.item.weekPrice,
        monthPrice: this.item.monthPrice,
        zipCode: this.item.zipCode,
        itemValue: this.item.itemValue,
        minRentalDays: this.item.minRentalDays,
        userId: this.userId,
      };
      ListingDataService.create(data)
        .then((response) => {
          console.log(response.data);
          this.message = "Listing was added successfuly";
          this.error = false;
          this.item.id = response.data.id
        })
        .catch((e) => {
          console.log(e);
          this.message =
            "There was an error adding the listing, try again later";
          this.error = true;
        });
    },
  },
};
</script>

<style scoped>
.card {
  height: 10rem;
  width: 20rem;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.mt-10 {
  margin-top: 10rem;
}

img {
  width: 17rem;
}

.bg-white {
  background: #fff;
}

.container-card {
  display: flex;
  justify-content: center;
}
</style>
