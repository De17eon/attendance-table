<template>
  <div class="v-news">
    <div class="container bubun-background mb-3 mt-2">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="my-post px-1 py-3 mb-3">
            <div class="mx-4 my-2 py-1 my-news-head d-flex flex-wrap align-content-center">
              <img :src="require('../assets/images/dl-light.png')" class="mr-3" alt="">
              <h3>Залив данных</h3>
              <span class="my-news-date ml-auto">24.05.2020</span>
            </div>
            <div class="mx-4 my-2 py-1 px-2 my-news-content">
              <p>Сегодня праздник! Все данные залиты на реальную базу данных. Была проблема с тем, что vuex не хочет работать с данными пришедшими с сервера. Решение - дефолтное задание объекта с ожидаемой структурой на фронте.</p>
            </div>
          </div>
          <div class="my-post px-1 py-3 mb-3">
            <div class="mx-4 my-2 py-1 my-news-head d-flex flex-wrap align-content-center">
              <img :src="require('../assets/images/dl-light.png')" class="mr-3" alt="">
              <h3>Вёрстка основы</h3>
              <span class="my-news-date ml-auto">11.04.2020</span>
            </div>
            <div class="mx-4 my-2 py-1 px-2 my-news-content">
              <p>Сегодня дизайн воплотили в жизнь</p>
            </div>
          </div>
          <div class="my-post px-1 py-3 mb-3">
            <div class="mx-4 my-2 py-1 my-news-head d-flex flex-wrap align-content-center">
              <img :src="require('../assets/images/dl-light.png')" class="mr-3" alt="">
              <h3>Нарисовали</h3>
              <span class="my-news-date ml-auto">10.04.2020</span>
            </div>
            <div class="mx-4 my-2 py-1 px-2 my-news-content">
              <p>Сегодня был придуман дизайн.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'v-news',
}
</script>

<style>
.my-post {
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
.my-news-head {
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  border-bottom: 1px solid #ced4da;
}
.my-news-head > img {
  width: 50px;
  height: 50px;
}
.my-news-content {
  border-bottom: 1px solid #ced4da;
  border-right: 1px solid #ced4da;
}
</style>
