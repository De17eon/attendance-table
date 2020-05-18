<template>
  <nav class="navbar navbar-light bg-dark">
    <div class="container">
      <div class="row">
        <div class="col d-flex p-2">
          <router-link to="/app" class="bubun-light navbar-brand mb-0 h1 bubun-ligth-text">Таблица посещаемости</router-link>
        </div>
        <div class="col d-flex p-2">
          <router-link to="/news" class="bubun-light navbar-brand mb-0 h1 bubun-ligth-text">Лента новостей</router-link>
        </div>
        <div class="col d-flex p-2">
          <router-link to="/profile" class="bubun-light navbar-brand mb-0 h1 bubun-ligth-text">Профиль</router-link>
        </div>
        <div class="col d-flex p-2">
          <a @click.prevent="logout" class="bubun-light navbar-brand mb-0 h1 bubun-ligth-text">Выйти</a>
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

</style>
