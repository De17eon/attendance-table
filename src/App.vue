<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import mainLayout from './layouts/mainLayout'
import emptyLayout from './layouts/emptyLayout'

export default {
    name: 'App',
    components: {
      mainLayout,
      emptyLayout
    },
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    }
}
</script>

<style>
</style>
