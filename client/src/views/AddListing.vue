<template>
  <div class="container">
    <form action="">
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

          <!-- <div class="form-group mt-4">
            <label for="image1"><strong>Add Photos</strong> </label>
            <input
              type="file"
              name="image1"
              class="form-control button-img"
              accept="image/*"
            />
          </div> -->
          <!-- <div class="form-group mt-4">
            <vue-upload-multiple-image
              @upload-success="uploadImageSuccess()"
              @edit-image="editImage()"
              :data-images="images"
              @mark-is-primary="markIsPrimary()"
              @limit-exceeded="limitExceeded()"
              @before-remove="beforeRemove()"
              id-upload="myIdUpload"
              id-edit="myIdEdit"
              :max-image="10"
              primary-text="Default"
              browse-text="Browse picture(s)"
              drag-text="Drag pictures"
              mark-is-primary-text="Set as default"
              popup-text="This image will be displayed as default"
              :multiple="true"
              :show-edit="true"
              :show-delete="true"
              :show-add="true"
            ></vue-upload-multiple-image>
          </div> -->
          
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
              <button @click="createListing()">Create Listing</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ListingDataService from "@/services/ListingDataService";
// import VueUploadMultipleImage from "vue-upload-multiple-image";
// import axios from 'axios';

export default {
  name: "AddListing",
  computed: {
    userId() {
      return this.$store.state.auth.user.id;
    },
  },
  components: {
    // VueUploadMultipleImage,
  },

  data() {
    return {
      item: {
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
      images: [],
    };
  },
  methods: {
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
        images: this.images,
        minRentalDays: this.item.minRentalDays,
        userId: this.userId,
      };
      ListingDataService.create(data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // uploadImageSuccess(formData, index, fileList) {
    //   console.log("upload success data ", formData, index, fileList);
    //   // upload image api
    //   // axios.post('http://your-url-upload', formData).then(response =>{
    //   //   console.log(response)
    //   // })
    // },
    // beforeRemove(index, removeCallBack) {
    //   console.log("index", index);
    //   let r = confirm("remove image");
    //   if (r === true) {
    //     removeCallBack();
    //   }
    // },

    // editImage(formData, index, fileList) {
    //   console.log("edit data", formData, index, fileList);
    // },

    // markIsPrimary(index, fileList) {
    //   console.log("markIsPrimary data", index, fileList);
    // },

    // limitExceeded(amount) {
    //   console.log("limitExceeded data", amount);
    // },
  },
};
</script>

<style scoped></style>
