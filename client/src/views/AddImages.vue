<template>
<div class="mt-5 pb-5">
  <!-- <form  enctype="multipart/form-data"> -->
    <!-- <div class="file is-boxed is-primary mt-5">
      <label for="file" class="label"><strong>Upload Image</strong></label>
      <input type="file" ref="file" @change="onSelect" class="file-input" />

      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Choose an image...
        </span>
      </span>
      <span v-if="file" class="file-name">{{ file.name }}</span>

      <div class="message">
        <h5>{{ message }}</h5>
      </div>
      <div>
        <img :src="url" alt="">
      </div>
    </div>
    <button class="mt-5">Submit Image</button> -->
    <UploadImages fileError="images files only accepted" :max="1" maxError="Only one image for now" ref="file" @change="onSelect" />
    <button @click.prevent="onSubmit" class="mt-5">Submit Image</button>
  <!-- </form> -->
  </div>
</template>

<script>
import axios from "axios";
import ListingDataService from "@/services/ListingDataService";
import UploadImages from "vue-upload-drop-images"

export default {
  name: "AddImages",
  components: {
    UploadImages,
  },
  computed: {
    userId() {
      return this.$store.state.auth.user.id;
    },
    listId() {
      return this.$store.state.listingData.listingId;
    },
  },
  data() {
    return {
      file: "",
      message: "",
      bfile: '',
      url: '',
    };
  },
  methods: {
    saveImages(){
      var data = {
        images: this.url,
      }
      ListingDataService.update(this.listId, data).then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Only images please...";
      }
      if (file.size > 500000) {
        this.message = "Too large of a file";
      }
    },

    onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);

      axios.post("http://localhost:8080/upload", formData)
      .then((res) => {
        this.message = "Uploaded!";
        this.bfile = res.data.file
        this.url = res.data.url

        this.saveImages()
      }).catch((err) =>{
        console.log(err)
        this.message = "Something went wrong!";
      })
      this.$router.push("/profile");
    },
  },
};
</script>
