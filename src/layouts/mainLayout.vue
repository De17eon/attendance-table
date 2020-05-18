<template>
  <div class="main-layout">
    <v-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import vNavbar from '../components/v-navbar'

export default {
  name: 'mainLayout',
  components: {
    vNavbar,
  },
  async mounted() {
    console.log('test')
    if (!Object.keys(this.$store.getters.PROFILE).length) {
      await this.$store.dispatch('fetchProfile')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
.bubun-ligth-text {
  color: #ffffffee !important;
}
.bubun-background {
  background: #ffffff;
  box-shadow: 0 3px 10px 2px #3f3f3f4f;
  padding: 10px;
}
.my-header {
  display: flex;
}
.my-gray {
  background-color:#e9ecef;
  border: 1px solid #ced4da;
  transition: 0.5s ease-in;
}
.my-gray:hover {
  background-color:#b6c2ce;
  transition: 0.5s ease-out;
}
.my-active {
  background-color: #b6c2ce15;
  padding: 4px 10px 0px 10px;
  border-radius: 4px;
}
</style>
