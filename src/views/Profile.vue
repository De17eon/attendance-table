<template>
  <div class="v-profile">
    <div class="container bubun-background bubun-heigth mb-3 mt-2">
      <div class="row mt-2 px-2">
        <div class="col-md-3 my-border-left">
          <ul class="list-group mt-2">
            <li class="list-group-item my-menu-item-active">Основаная информация</li>
            <li class="list-group-item my-menu-item">Безопасность</li>
            <li class="list-group-item my-menu-item">Статистика (beta)</li>
          </ul>
        </div>
        <div class="col-md-9 my-border-right">
          <div class="col-md-8">
            <!-- Фамилия -->
            <div class="input-group input-group-lg my-2">
              <div class="input-group-prepend">
                <span class="input-group-text my-span-width" id="inputGroup-sizing-lg">Фамилия</span>
              </div>
              <input 
                type="text" 
                class="form-control" 
                aria-label="Large" 
                :placeholder="profile.surname" 
                aria-describedby="inputGroup-sizing-sm" 
                disabled
              >
            </div>
            <!-- Имя -->
            <div class="input-group input-group-lg my-2">
              <div class="input-group-prepend">
                <span class="input-group-text my-span-width" id="inputGroup-sizing-lg">Имя</span>
              </div>
              <input 
                type="text" 
                class="form-control" 
                :placeholder="profile.name"
                aria-describedby="inputGroup-sizing-sm" 
                disabled
              >
            </div>
            <!-- Отчество -->
            <div class="input-group input-group-lg my-2">
              <div class="input-group-prepend">
                <span class="input-group-text my-span-width" id="inputGroup-sizing-lg">Отчество</span>
              </div>
              <input 
                type="text" 
                class="form-control" 
                aria-label="Large" 
                :placeholder="profile.patronymic" 
                aria-describedby="inputGroup-sizing-sm" 
                disabled
              >
            </div>
            <!-- Группа -->
            <div class="input-group input-group-lg my-2">
              <div class="input-group-prepend">
                <span class="input-group-text my-span-width" id="inputGroup-sizing-lg">Группа </span>
              </div>
              <input 
                type="text" 
                class="form-control" 
                aria-label="Large" 
                :placeholder="profile.group" 
                aria-describedby="inputGroup-sizing-sm" 
                disabled
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'v-profile',
  computed: {
    profile() {
      return this.$store.getters.PROFILE
    }
  }
}
</script>

<style>
.bubun-heigth{
  min-height: 500px;
}
.my-border-left {
  border-top: 1px solid #ced4da;
  border-right: 1px solid #ced4da;
  min-height: 450px;
}
.my-border-right {
  border-top: 1px solid #ced4da;
  height: 100%;
}
.my-menu-item .my-menu-item-active {
  font-size: 1.2rem;
  transition: 0.5s ease-in;
}
.my-menu-item-active {
  text-decoration: underline;
  line-height: 2;
}

.my-span-width {
  min-width: 170px;
}
</style>
