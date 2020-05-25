<template>
  <div class="v-table-presence-column-cell">
      <div 
        @click.prevent="handlerCell"
        class="v-table-cell"
        :class="{
          'v-table-cell__novisit': сellValue == 'n', 
          'v-table-cell__visit': сellValue == 'y',
          'v-table-cell_reason': сellValue == 'r'
        }"
      ></div>
  </div>
</template>



<script>
import {mapGetters} from 'vuex'

export default {
  name: 'v-table-presence-column-cell',
  props: ['studentN', 'columnN'],
  computed: {
    ...mapGetters([
      'VISIT_IN_CELL'
    ]),
    cellData() {
      return {
        columnN: this.columnN,
        studentN: this.studentN
      }
    },
    сellValue(){
      return this.VISIT_IN_CELL(this.cellData)
    }
  },
  methods: {
    handlerCell() {
      this.$store.commit('ChangeCellValue', this.cellData)
    }
  }
}
</script>

<style>
  .v-table-presence-column-cell {
    cursor: pointer;
    display: flex;
    height: 25px;
    width: 100%;
    padding: 2px;
    border: none;
    border-bottom: 1px solid silver;
    box-sizing: border-box;
  }
  .v-table-cell {
    width: 100%;
    border-radius: 3px;
  }
  .v-table-cell__visit {
    background-color: rgb(153, 202, 153);
  }
  .v-table-cell__novisit {
    background-color: rgb(255, 255, 255);
  }
  .v-table-cell_reason {
    background-color: rgb(197, 197, 197);
  }
</style>
