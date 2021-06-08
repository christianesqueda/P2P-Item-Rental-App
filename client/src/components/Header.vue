<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark naav">
      <router-link to="/home" class="nav-link">
        <span class="navbar-brand">DivvyUp</span>
      </router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav mr-auto"></div>
      </div>
      
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.naav {
  background-color: rgb(109, 222, 222);
}

.form-control:focus {
  box-shadow: none;
}

body {
  background: #ffd89b;
  background: -webkit-linear-gradient(to right, #ffd89b, #19547b);
  background: linear-gradient(to right, #ffd89b, #19547b);
  min-height: 100vh;
}

.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}
</style>
