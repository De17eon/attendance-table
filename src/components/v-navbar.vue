<template>
  <nav class="navbar navbar-light bg-dark">
    <div class="container">
      <div class="row">
        <div class="my-header-link">
          <router-link to="/app" class="mb-0 px-2 bubun-ligth-text my-link">Приложение</router-link>
        </div>
        <div class="my-header-link">
          <router-link to="/news" class="mb-0 px-2 bubun-ligth-text my-link">Новости</router-link>
        </div>
        <div class="my-header-link">
          <router-link to="/profile" class="px-2 mb-0 bubun-ligth-text my-link">Профиль</router-link>
        </div>
      </div>
      <div class="row">
        <div class="my-header-link mr-2">
          <a @click.prevent="logout" class="px-2 mb-0 bubun-ligth-text my-link">Выйти</a>
        </div> 
      </div>
    </div>
  </nav>  
</template>

<script>
export default {
  name: 'v-navbar',
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

.my-header-link {
  font-family: 'Comfortaa', sans-serif;
  transition: ease-out .1s;
  border-radius: 2px;
  font-size: 1.15rem;
  cursor: pointer;
  margin-top: 4px;
  margin-bottom: 4px;
}
.my-header-link:hover {
  background-color:#4ac8e71c;
  transition: ease-in .2s;
  border-radius: 5px;
  text-decoration: none;
}
.my-link {
  text-decoration: none !important;
}
.my-link:hover {
  text-decoration: none !important;
}
</style>
