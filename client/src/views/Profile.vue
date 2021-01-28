<template>
  <div class="container">
    <header>
      <h3>
        <strong>{{ currentUser.username }} Profile </strong> 
      </h3>
    </header>
    <div class="ava_image">
          <img src="../assets/male_avatar.png" alt="Avatar" class="rounded-circle" />
        </div>

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
};
</script>

<style scoped>
.ava_image {
  width: 20%;
}
</style>