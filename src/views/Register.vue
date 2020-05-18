<template>
  <form 
    class="reg-form reg-form__register-width"
    @submit.prevent="submitHendler"
  >
    <h3 class="text-center">Регистрация</h3>
    <hr>
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
        :class="{'ref-form__invalid-field': $v.email.$dirty && (!$v.email.required || !$v.email.email)}"
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
        :class="{'ref-form__invalid-field': $v.password.$dirty && (!$v.password.required || !$v.password.minLength)}"
      >
    </div>
    <div class="mb-3">
    <small 
      v-if="$v.password.$dirty && !$v.password.required"
    >
      Поле пароль не должно быть пустым.
    </small>
    <small 
      v-else-if="$v.password.$dirty && !$v.password.minLength"
    >
      Пароль должен быть не менее 6 символов.
    </small>
    </div>
    <!-- Имя -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text reg-form__label" id="inputGroup-sizing-default">Имя</span>
      </div>
      <input 
        type="text" 
        class="form-control" 
        v-model.trim="name"
        :class="{'ref-form__invalid-field': $v.name.$dirty && !$v.name.required}"
      >
    </div>
    <div class="mb-3">
      <small 
        v-if="$v.name.$dirty && !$v.name.required"
      >
        Это поле не должно быть пустым.
      </small>
    </div>
    <!-- Фамилия -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text reg-form__label" id="inputGroup-sizing-default">Фамилия</span>
      </div>
      <input 
        type="text" 
        class="form-control"
        v-model.trim="surname"
        :class="{'ref-form__invalid-field': $v.surname.$dirty && !$v.surname.required}" 
      >
    </div>
    <div class="mb-3">
      <small 
        v-if="$v.surname.$dirty && !$v.surname.required"
      >
        Это поле не должно быть пустым.
      </small>
    </div>
    <!-- Отчество -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text reg-form__label" id="inputGroup-sizing-default">Отчество</span>
      </div>
      <input 
        type="text" 
        class="form-control"
        v-model.trim="patronymic"
        :class="{'ref-form__invalid-field': $v.patronymic.$dirty && !$v.patronymic.required}" 
      >
    </div>
    <div class="mb-3">
      <small 
        v-if="$v.patronymic.$dirty && !$v.patronymic.required"
      >
        Это поле не должно быть пустым.
      </small>
    </div>
    <!-- Группа -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text reg-form__label" id="inputGroup-sizing-default">Группа</span>
      </div>
      <input 
        type="text" 
        class="form-control" 
        v-model.trim="group"
        :class="{'ref-form__invalid-field': $v.group.$dirty && (!$v.group.required || !$v.group.numeric || !$v.group.minLength || !$v.group.maxLength)}"
      >
    </div>
    <div class="mb-3">
      <small 
        v-if="$v.group.$dirty && !$v.group.required"
      >
        Это поле не должно быть пустым.
      </small>
      <small
        v-else-if="$v.group.$dirty && (!$v.group.minLength || !$v.group.maxLength || !$v.group.numeric)"
      >
        Это поле должны содержать 4 цифры, соответстующие вашей учебной группе.
      </small>
    </div>
    <!-- End -->
    <hr>
    <button type="submit" class="btn reg-form__btn">Зарегестрироваться</button>
    <hr>
    <router-link class="reg-form__link" to="/login">У меня уже есть аккаунт</router-link>
    <hr>
    <div class="text-center">Bubun Team</div>
  </form>
</template>

<script>
import {email, required, minLength, numeric, maxLength} from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    surname: '',
    patronymic: '',
    group: '',
  }),
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(6)},
    name: {required},
    surname: {required},
    patronymic: {required},
    group: {
      required,
      numeric,
      minLength: minLength(4),
      maxLength: maxLength(4)
    }
  },
  methods: {
    async submitHendler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        group: this.group
      }
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/app')
      } catch (e) {
        console.log('Register.vue => ', e)
      }  
    }
  }
}
</script>

<style>
.reg-form__register-width {
  width: 500px;
}
</style>

