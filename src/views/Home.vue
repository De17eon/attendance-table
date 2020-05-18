<template>
  <div>
    <div class="container bubun-background mb-3 mt-2">
      <div class="row mt-4 mb-4">
        <div class="col-md-7">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Выбор недели: </label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option selected>Текущая неделя</option>
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
                <option value="20">Неделя 20: 01.06.20</option>
            </select>
          </div>

          <button type="button" class="btn my-gray mr-2 mb-2">Применить</button>
          <button type="button" class="btn my-gray mr-2 mb-2">Шаблон</button>
          <button type="button" class="btn my-gray mr-2 mb-2">Очистить всё</button>
          <button type="button" class="btn my-gray mr-2 mb-2">Перености с занятия</button>
          <button type="button" class="btn my-gray mr-2 mb-2">Отмена</button>
        </div>
      </div>
    </div>
    <div class="container bubun-background">
      <v-table-presence />
    </div>
  </div>
</template>

<script>
import vTablePresence from './../components/v-table-presence'

export default {
    name: 'v-wrapper',
    components: {
        vTablePresence
    },
    data() {
        return {
            windowWidth: 0,
            windowHeight: 0,
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
            window.addEventListener('resize', this.getWindowHeight);

            this.getWindowWidth()
            this.getWindowHeight()
        })
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = document.documentElement.clientWidth;
        },

        getWindowHeight() {
            this.windowHeight = document.documentElement.clientHeight;
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
        window.removeEventListener('resize', this.getWindowHeight);
    }

}
</script>


