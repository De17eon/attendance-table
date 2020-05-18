<template>
  <div class="v-news">
    <div class="container bubun-background mb-3 mt-2">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="my-post px-1 py-3 mb-3">
            <div class="mx-4 my-2 py-1 my-news-head d-flex flex-wrap align-content-center">
              <img :src="require('../assets/images/dl-light.png')" class="mr-3" alt="">
              <h3>Lorem Ipsum 2</h3>
              <span class="my-news-date ml-auto">11.04.2020</span>
            </div>
            <div class="mx-4 my-2 py-1 px-2 my-news-content">
              <p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32</p>
            </div>
          </div>
          <div class="my-post px-1 py-3 mb-3">
            <div class="mx-4 my-2 py-1 my-news-head d-flex flex-wrap align-content-center">
              <img :src="require('../assets/images/dl-light.png')" class="mr-3" alt="">
              <h3>Lorem Ipsum 1</h3>
              <span class="my-news-date ml-auto">10.04.2020</span>
            </div>
            <div class="mx-4 my-2 py-1 px-2 my-news-content">
              <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</p>
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
