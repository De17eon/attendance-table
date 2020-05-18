<template>
  <div class="v-table-presence-column">
      <v-table-presence-column-cell v-for="student in STUDENTS" :key="student.number" />
  </div>
</template>

<script>
import vTablePresenceColumnCell from './v-table-presence-column-cell'
import {mapGetters} from 'vuex'

export default {
    name: 'v-table-presence-column',
    components: {
        vTablePresenceColumnCell
    },
    computed: {
        ...mapGetters([
            'VISITS',
            'STUDENTS',
            'SUBJECTS',
        ]),
    }


}
</script>

<style>
    .v-table-presence-column {
        display: flex;
        flex-direction: column;
        width: 50px;
    }
</style>