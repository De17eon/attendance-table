<template>
  <div 
    class="v-table-presence-header-cell"
    @click.exact="activeToColumn"
    @click.ctrl="columnSelection"
    :class="{
      'v-table-presence-header-cell__active': columnN == ACTIVECOLUMN,
      'v-table-presence-header-cell__transfer': columnN == TRANSFERCOLUMN,
      'v-table-presence-header-cell__manyactive': MANY_ACTIVE_COLUMN.includes(columnN)
    }"
  >
    <p class="v-table-presence-header-cell__name">{{ subject.subject }}</p> 
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'v-table-presence-header-cell',
    props: ['subject', 'columnN'],
    computed: {
      ...mapGetters([
        'ACTIVECOLUMN',
        'TRANSFERCOLUMN',
        'MANY_ACTIVE_COLUMN'
      ]),
    },
    methods: {
      activeToColumn() {
        this.$store.commit('ChangeActiveColumn', this.columnN)
      },
      columnSelection() {
        this.$store.commit('columnSelection', this.columnN)
      }
    }
  }
</script>

<style>
.v-table-presence-header-cell {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  border-left: 1px solid silver;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  height: 180px;
  width: 50px;
  min-width: 50px;
  transform: rotate(180deg);
}
.v-table-presence-header-cell__name {
  writing-mode: vertical-rl;
  font-family: 'Open Sans';
  font-size: 14px;
  padding-top: 5px;
  margin: 0 0;
}
.v-table-presence-header-cell__active {
  border-left: 2px solid orange;
  border-right: 2px solid orange;
  box-sizing: border-box;
}
.v-table-presence-header-cell__transfer {
  border-left: 2px solid rgb(28, 144, 190);
  border-right: 2px solid rgb(28, 144, 190);
  box-sizing: border-box;
}
.v-table-presence-header-cell__manyactive {
  /* background-color: rgb(133, 140, 241); */
  background-color: #e9ecef;
}
</style>
