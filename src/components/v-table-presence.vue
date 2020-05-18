<template>
  <div class="v-table-presence">
      <v-table-presence-header />
      <div class="v-table-presence-header__wrap">
        <v-table-presence-students />
        <v-table-presence-active-zone />
      </div>
  </div>
</template>

<script>
import vTablePresenceHeader from './v-table-presence-header'
import vTablePresenceStudents from './v-table-presence-students'
import vTablePresenceActiveZone from './v-table-presence-active-zone'

export default {
    name: 'v-table-presence',
    components: {
      vTablePresenceHeader,
      vTablePresenceStudents,
      vTablePresenceActiveZone
    }

}
</script>

<style>
  .v-table-presence {
    margin: 20px;
    overflow: auto;
  }
  .v-table-presence-header__wrap {
    display: flex;
  }

  @media (max-width: 767px) {
    .v-table-presence {
        width: 470px;
    }
  }

  @media (min-width: 768px) {
    .v-table-presence {
        width: 700px;
    }
  }


  @media (min-width: 992px) {
      .v-table-presence {
          width: 900px;
      }
  }


  @media (min-width: 1200px) {
      .v-table-presence {
          width: 1080px;
      }
  }
</style>