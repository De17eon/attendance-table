<template>
  <div class="v-table-presense-active-zone">
    <v-table-presence-column 
      v-for="(value, columnN, index) in table" 
      :key="index"
      :column="table[columnN]"
      :columnN="columnN"
    />
  </div>
</template>

<script>
import vTablePresenceColumn from './v-table-presence-column'
import {mapGetters} from 'vuex'

export default {
  name: 'v-table-presence-active-zone',
  components: {
    vTablePresenceColumn,
  },
  computed: {
    ...mapGetters([
      'VISITS',
    ]),
    table() {
      return this.VISITS['week0']
    }
  },
}
</script>

<style>
.v-table-presense-active-zone {
  display: flex;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  .v-table-presense-active-zone {
    width: 470px;
  }
}
@media (min-width: 768px) {
  .v-table-presense-active-zone {
    width: 700px;
  }
}
@media (min-width: 992px) {
  .v-table-presense-active-zone {
    width: 900px;
  }
}
@media (min-width: 1200px) {
  .v-table-presense-active-zone {
    width: 1080px;
  }
}
</style>
