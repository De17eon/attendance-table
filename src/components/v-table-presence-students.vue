<template>
  <div class="v-table-presence-students">
      <div class="student" data-title="Тест" v-for="(student, index) in STUDENTS" :key="index">{{ student.name }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'students',
    computed: {
        ...mapGetters([
            'STUDENTS'
        ])
    }
}
</script>

<style>
    .v-table-presence-students {
        display: flex;
        flex-direction: column;
        min-width: 200px;
        max-width: 200px;
    }
    .student {
        font-family: 'Open Sans';
        font-size: 14px;
        border: 1px solid silver;
        height: 25px;
        overflow: hidden;
        padding-left: 5px;
    }
    .student:hover {
         overflow: auto;
    }
</style>