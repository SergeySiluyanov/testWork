<script setup lang="ts">
import { reactive } from 'vue'
import {useAuthStore} from '@/stores/auth'

const authStore = useAuthStore()

const form = reactive({
  email: '',
  password: '',
})

const login = (event) => {
  event.preventDefault()
  authStore.login(form)
}
</script>

<template>
  <div class="login">
    <form class="login__form form" @submit="(e) => login(e)">
      <label for="email">
        <input type="email" id="email" class="form__input" v-model="form.email" required placeholder="Email" />
      </label>
      <label for="password">
        <input type="password" class="form__input" id="password" v-model="form.password" required placeholder="Пароль" />
      </label>

      <button class="form__button" type="submit">Авторизоваться</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  &::before {
    content: '';
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &__form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    z-index: 1;
    width: 320px;
  }
}

.form {
  label {
    display: block;
    margin-bottom: 8px;
    width: 100%;
  }

  &__input {
      display: block;
      border: 1px solid #cfcfcf;
      padding: 8px;
      border-radius: 4px;
      width: 100%;
  }

  &__button {
    margin-top: 20px;
    width: 100%;
    background-color: rgba(24, 111, 175, 1);
    border: 0;
    padding: 8px;
    color: #ffffff;
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(24, 111, 175, 0.5);
    }
  }
}
</style>
