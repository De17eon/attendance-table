<template>
  <div class="empty-layout">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'emptyLayout',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
.reg-form{
  background-color: #636f7c;
  color: white;
  font-family: 'Jost', sans-serif;
  margin-top: calc(15vh);
  padding: 35px;
  border-radius: 4px;
  border: 1px solid rgb(230, 230, 230);
  -webkit-box-shadow: 0px 0px 117px 7px rgba(52,58,64,0.86);
  -moz-box-shadow: 0px 0px 117px 7px rgba(52,58,64,0.86);
  box-shadow: 0px 0px 117px 7px rgba(52,58,64,0.86);
}
.reg-form__link {
  color: rgb(240, 218, 193);
}
.reg-form__link:hover {
  color: rgb(231, 196, 156);
}
.reg-form__label {
  width: 100px;
  background-color: #59636e;
  color: rgb(240, 218, 193);  
}
.reg-form__btn:hover {
  background-color: #6e7883;
  color: white;  
}
.reg-form__btn {
  background-color: #59636e;
  border: 1px solid white;
  color: rgb(240, 218, 193);
}
.reg-form__pb {
  padding-bottom: 0;
}
.ref-form__invalid-field {
  background-color: rgb(240, 218, 193);
}
</style>
