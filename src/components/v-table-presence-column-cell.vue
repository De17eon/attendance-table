<template>
  <div class="v-table-presence-column-cell">
      <div 
        @click.prevent="handlerCell"
        class="v-table-cell"
        :class="{
          'v-table-cell__novisit': visit == 'n', 
          'v-table-cell__visit': visit == 'y',
          'v-table-cell_reason': visit == 'r'
        }"
      ></div>
  </div>
</template>

<script>
export default {
  name: 'v-table-presence-column-cell',
  props: ['studentN', 'columnN'],
  data() {
    return {
      visit: 'n',
      counterClick: 0, 
    }
  },
  methods: {
    handlerCell() {
      const values = ['n', 'y', 'r']
      this.counterClick = (this.counterClick + 1) % 3
      this.visit = values[this.counterClick]

      const cellData = {
        column: this.columnN,
        student: this.studentN,
        visit: this.visit
      }
      this.$store.commit('ChangeCellValue', cellData)
    }
  }
}
</script>

<style>
  .v-table-presence-column-cell {
    display: flex;
    height: 25px;
    min-width: 50px;
    width: 50px;
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
    background-color: rgb(238, 230, 209);
  }
</style>
