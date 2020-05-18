<template>
  <div class="v-table-presense-active-zone">
      <!-- <div class="v-table-presence-column" v-for="visit_sub in VISITS" :key="visit_sub.number_column">
          
      </div> -->
        <v-table-presence-column v-for="visit_sub in VISITS" :key="visit_sub.number_column"/>
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
            'STUDENTS',
            'SUBJECTS',
        ]),
    }
}
</script>

<style>
    .v-table-presense-active-zone {
        display: flex;
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