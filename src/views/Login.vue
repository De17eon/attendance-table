<template>
  <form 
    class="reg-form reg-form__login-width reg-form__pb" 
    @submit.prevent="submitHendler"
  >
      <h3 class="text-center mb-3">Вход</h3>
      <hr />
      <div class="d-flex flex-column">
        <!-- Email -->
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text reg-form__label" id="inputGroup-sizing-default">Почта</span>
          </div>
          <input
            id="email" 
            type="text" 
            class="form-control"
            v-model.trim="email"
            :class="{'ref-form__invalid-field': ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
          >
        </div>
        <div class="mb-3">
          <small 
            v-if="$v.email.$dirty && !$v.email.required"
          >
            Поле email не должно быть пустым
          </small>
          <small 
            v-else-if="$v.email.$dirty && !$v.email.email"
          >
            Введите коректный email
          </small>
        </div>
        <!-- Password -->
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text reg-form__label" id="inputGroup-sizing-default">Пароль</span>
          </div>
          <input
            id="password" 
            type="password" 
            class="form-control"
            v-model.trim="password"
            :class="{'ref-form__invalid-field': ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          >
        </div>
        <div class="mb-3">
          <small 
            v-if="$v.password.$dirty && !$v.password.required"
          >
            Поле пароль не должно быть пустым
          </small>
          <small 
            v-else-if="$v.password.$dirty && !$v.password.minLength"
          >
            Пароль должен быть не менее 6 символов
          </small>
        </div>
        <!-- Button submit -->
        <button 
          type="submit" 
          class="btn reg-form__btn reg-form__long-btn mb-3"
        >
          Войти
        </button>
        <!-- End commentaries -->
        <router-link class="reg-form__link" to="/register">Регистрация</router-link>
      </div>
      <hr />
      <p class="text-center">Bubun Team</p>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    async submitHendler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/app')
      } catch (e) {
        console.log('Login.vue', e)
      }
    }
  }
}
</script>

<style>
.reg-form__long-btn {
  width: 150px;
}
.reg-form__login-width {
  width: 380px;
}
</style>
