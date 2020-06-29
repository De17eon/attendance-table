<template>
  <div 
    class="v-table-presence-column"
    :class="{
      'v-table-presence-column__active': parseInt(columnN.match(/\d+/)) == ACTIVECOLUMN,
      'v-table-presence-column__transfer': parseInt(columnN.match(/\d+/)) == TRANSFERCOLUMN,
      'v-table-presence-column__manyactive': MANY_ACTIVE_COLUMN.includes(parseInt(columnN.match(/\d+/)))         
    }"
  >
    <v-table-presence-column-cell 
      v-for="(val, studentN, index) in column" 
      :key="index" 
      :studentN="studentN"
      :columnN="columnN"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vTablePresenceColumnCell from './v-table-presence-column-cell'

export default {
  name: 'v-table-presence-column',
  props: ['column', 'columnN'],
  components: {
    vTablePresenceColumnCell
  },
  computed: {
    ...mapGetters([
      'ACTIVECOLUMN',
      'TRANSFERCOLUMN',
      'MANY_ACTIVE_COLUMN'
    ]),
  },
}
</script>

<style>
.v-table-presence-column {
  display: flex;
  flex-direction: column;
  width: 50px;
  min-width: 50px;
  border-right: 1px solid silver;
  box-sizing: border-box;
}
.v-table-presence-column__active {
  border-left: 2px solid orange;
  border-right: 2px solid orange;
}
.v-table-presence-column__transfer {
  border-left: 2px solid rgb(28, 144, 190);
  border-right: 2px solid rgb(28, 144, 190);
}
.v-table-presence-column__manyactive {
  background-color: #e9ecef;
}
</style>
