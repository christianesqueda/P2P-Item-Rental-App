<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 text-center ml-0">
        <img
          src="../assets/male_avatar.png"
          alt="Avatar"
          class="rounded-circle img-fluid mt-4"
        />

        <div class="h3 mt-2">
          <strong>{{ currentUser.username }} </strong>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <div class="h4">
          <button type="button" class="btn btn-primary mt-5" @click="addListing">
            Add New Item!
          </button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  methods: {
    addListing(){
      this.$router.push("/AddListing")
    }
  }
};
</script>

<style scoped>
.image {
  width: 20%;
}
</style>
