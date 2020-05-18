<template>
  <div class="v-table-presence-header">
      <v-table-presence-empty-cell />
      <v-table-presence-header-cell v-for="subject in SUBJECTS" :key="subject.number_column" :subject="subject" />
  </div>
</template>

<script>
import vTablePresenceHeaderCell from './v-table-presence-header-cell'
import vTablePresenceEmptyCell from './v-table-presence-empty-cell'
import {mapGetters} from 'vuex'

export default {
    name: 'v-table-presence-header',
    components: {
        vTablePresenceHeaderCell,
        vTablePresenceEmptyCell
    },
    computed: {
        ...mapGetters([
            'SUBJECTS'
        ])
    }
}
</script>

<style>
.v-table-presence-header {
    display: flex;
}

@media (max-width: 767px) {
    .v-table-presence-header {
        width: 470px;
    }
}

@media (min-width: 768px) {
    .v-table-presence-header {
        width: 700px;
    }
}


@media (min-width: 992px) {
    .v-table-presence-header {
        width: 900px;
    }

}


@media (min-width: 1200px) {
    .v-table-presence-header {
        width: 1080px;
    }

}

</style>