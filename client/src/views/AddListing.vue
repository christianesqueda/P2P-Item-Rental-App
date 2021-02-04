<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col-md-5 text-center mx-5">
          <div class="form-group mt-4">
            <label for="category"><strong> Category </strong></label>
            <select name="category" id="category" class="form-control">
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
              name="itemName"
              placeholder="e.g. Karaoke Machine"
              size="40"
              class="form-control"
            />
          </div>
          <div class="form-group mt-4">
            <label for="description"><strong>Description</strong></label>
            <input
              type="textarea"
              class="form-control"
              name="description"
              placeholder="e.g. A karaoke machine is perfect for social ocassions."
              size="40"
            />
          </div>

          <div class="form-group mt-4">
            <label for="image1"
              ><strong>Add Photos</strong>
            </label>
            <input
              type="file"
              name="image1"
              class="form-control button-img"
              accept="image/*"
              required
            />
          </div>


        </div>
        <div class="container col-md-5 mt-4 text-center">
          <span><strong>Rental Price</strong></span>
          <br>
          <label class="mt-4" for="itemName"><strong>Daily</strong></label>
          
          <input
              type="number"
              name="dayPrice"
              placeholder="$0.00"
              size="10"
              class="form-control"
            />
          <label class="mt-4" for="itemName"><strong>Weekly</strong></label>
          <input
              type="number"
              name="weekPrice"
              placeholder="$0.00"
              size="10"
              class="form-control"
            />
            <label class="mt-4" for="itemName"><strong>Monthly</strong></label>
          <input
              type="number"
              name="monthPrice"
              placeholder="$0.00"
              size="10"
              class="form-control"
            />
            <label class="mt-4" for="itemName"><strong>Item Value</strong></label>
          <input
              type="number"
              name="itemValue"
              placeholder="$0.00"
              size="10"
              class="form-control"
            />
            <label class="mt-4" for="itemName"><strong>Minimum Rental Days</strong></label>
          <input
              type="number"
              name="minRentalDays"
              placeholder=""
              size="10"
              class="form-control"
            />
            <label class="mt-4" for="itemName"><strong>Zip Code</strong></label>
          <input
              type="number"
              name="zipCode"
              placeholder="e.g. 90210"
              size="10"
              class="form-control"
            />
        </div>
      </div>
    </form>

      <!-- <div class="row">
        <div class="container col-3">
          <img class="mt-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Photo-camera-in-circular-outlined-interface-button.svg/1200px-Photo-camera-in-circular-outlined-interface-button.svg.png"
            height="80"
          />
          
        </div>


        
      </div> -->
    
  </div>
</template>

<script>
// import UploadService from "../services/UploadFilesService";

export default {
  name: "AddListing",

  data() {
    return {
      // selectedFiles: undefined,
      // progressInfos: [],
      // message: "",
      // fileInfos: [],
      // item: {
      //   category: null,
      //   itemName: null,
      //   description: null,
      //   dayPrice: null,
      //   weekPrice: null,
      //   monthPrice: null,
      //   zipCode: null,
      //   itemValue: null,
      //   minRentalDays: null,
      //   images: [],
      // },
    };
  },
  methods: {
    // selectFile() {
    //   this.progressInfos = [];
    //   this.selectedFiles = event.target.files;
    // },
    // uploadFiles() {
    //   this.message = "";
    //   for (let i = 0; i < this.selectedFiles.length; i++) {
    //     this.upload(i, this.selectedFiles[i]);
    //   }
    // },
    // upload(idx, file) {
    //   this.progressInfos[idx] = { percentage: 0, fileName: file.name };
    //   UploadService.upload(file, (event) => {
    //     this.progressInfos[idx].percentage = Math.round(
    //       (100 * event.loaded) / event.total
    //     );
    //   })
    //     .then((response) => {
    //       let prevMessage = this.message ? this.message + "\n" : "";
    //       this.message = prevMessage + response.data.message;
    //       return UploadService.getFiles();
    //     })
    //     .then((files) => {
    //       this.fileInfos = files.data;
    //     })
    //     .catch(() => {
    //       this.progressInfos[idx].percentage = 0;
    //       this.message = "Could not upload the file:" + file.name;
    //     });
    // },
    // mounted() {
    //   UploadService.getFiles().then((response) => {
    //     this.fileInfos = response.data;
    //   });
    // },
  },
};
</script>

<style scoped>

</style>
