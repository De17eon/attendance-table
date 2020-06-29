<template>
  <div>
    <div class="container bubun-background mb-3 mt-2">
      <div class="row mt-3 ml-3">
        <div class="col-md-7">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Выбор недели: </label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option value="1">Неделя 1: 20.01.20</option>
                <option value="2">Неделя 2: 27.01.20</option>
                <option value="3">Неделя 3: 03.02.20</option>
                <option value="4">Неделя 4: 10.02.20</option>
                <option value="5">Неделя 5: 17.02.20</option>
                <option value="6">Неделя 6: 24.02.20</option>
                <option value="7">Неделя 7: 02.03.20</option>
                <option value="8">Неделя 8: 09.03.20</option>
                <option value="9">Неделя 9: 16.03.20</option>
                <option value="10">Неделя 10: 23.03.20</option>
                <option value="11">Неделя 11: 30.03.20</option>
                <option value="12">Неделя 12: 6.04.20</option>
                <option value="13">Неделя 13: 13.04.20</option>
                <option value="14">Неделя 14: 20.04.20</option>
                <option value="15">Неделя 15: 27.04.20</option>
                <option value="16">Неделя 16: 04.05.20</option>
                <option value="17">Неделя 17: 11.05.20</option>
                <option value="18">Неделя 18: 18.05.20</option>
                <option value="19">Неделя 19: 25.05.20</option>
                <option value="20" selected>Неделя 20: 01.06.20</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row mb-3 ml-3">
        <div class="col-md-12">
          <button type="button" @click.prevent="saveToServer" class="btn my-gray mr-2 mb-2">Сохранить</button>
          <button type="button" @click.prevent="loadOnServer" class="btn my-gray mr-2 mb-2">Отмена</button>
          <button type="button" @click.prevent="clickTemplate" class="btn my-gray mr-2 mb-2">Шаблон</button>
          <button type="button" @click.prevent="clickClear" class="btn my-gray mr-2 mb-2">Очистить всё</button>
          <button type="button" @click.prevent="clickClearColumn" class="btn my-gray mr-2 mb-2">Очистить</button>
          <button type="button" @click.prevent="clickTransfer" class="btn my-gray mr-2 mb-2">Запомнить</button>
          <button type="button" @click.prevent="toFill" class="btn my-gray mr-2 mb-2">Заполнить по строке</button>
        </div>
      </div>
      <v-table-loader v-if="loading" />
      <v-table-presence v-else />
    </div>
  </div>
</template>

<script>
import vTablePresence from './../components/v-table-presence'
import vTableLoader from './../components/v-table-loader'

export default {
  name: 'v-wrapper',
  components: {
    vTablePresence,
    vTableLoader
  },
  data: () => ({
    loading: true
  }),
  async mounted() {
    await this.$store.dispatch('loadTable')
    this.loading = false
  },
  methods: {
    clickTemplate() {
      this.$store.commit('toActiveVisitTemplate')
    },
    clickClear() {
      this.$store.commit('clearTable')
    },
    clickClearColumn() {
      this.$store.commit('clickClearColumn')
    },
    clickTransfer() {
      this.$store.commit('toTransferColumn')
    },
    toFill() {
      this.$store.commit('toFill')
    },
    async saveToServer() {
      await this.$store.dispatch('saveTable')
    },
    async loadOnServer() {
      await this.$store.dispatch('loadTable')
    }
  }
}
</script>



