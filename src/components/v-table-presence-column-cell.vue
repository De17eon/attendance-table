<template>
  <div class="v-table-presence-column-cell">
      <input type="checkbox" class="column-cell__checkbox" v-model="visit">
  </div>
</template>

<script>
export default {
    name: 'v-table-presence-column-cell',
    data() {
        return {
            visit: false
        }
    }


}
</script>

<style>
    .v-table-presence-column-cell {
        display: flex;
        height: 25px;
        width: 50px;
        border: 1px solid silver;
    }
    .column-cell__checkbox {
        width: 100%;
        height: 100%;
    }
</style>