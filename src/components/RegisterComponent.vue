<template>
    <div>
        <HeaderComponent/>
        <div class="container">
            <div class="register-content">
              <div class="register-part mt-4">
                <h1>Register</h1>
                <span class="mt-3 mb-2">Name</span>
                <input :class="['form-control', {'danger' : isIncorrectName}]" v-model="name">
                <p v-if="isIncorrectName" class="m-0">Write your name, please</p>

                <span class="mt-3 mb-2">Username</span>
                <input :class="['form-control', {'danger' : isIncorrectUsername}]" v-model="userName">
                <p v-if="isIncorrectUsername" class="p-0">Write your username, please</p>

                <span class="mt-3 mb-2">E-mail</span>
                <input :class="['form-control', {'danger' : isIncorrectEmail}]" v-model="email">
                <p v-if="isIncorrectEmail" class="p-0">Write your e-mail, please</p>

                <span class="mt-3 mb-2">Password</span>
                <div class="password-part">
                  <input :type="inputType" :class="['form-control', {'danger' : isIncorrectPassword}]" v-model="password">
                  <i :class="['fa-regular', {'fa-eye-slash' : isClosed}, {'fa-eye': !isClosed}]" @click="changeIcon"></i>
                </div>
                <p v-if="isIncorrectPassword" class="p-0">Write your password, please</p>

                <span class="mt-3 mb-2">Repeat password</span>
                <div class="password-part">
                  <input :type="inputType" :class="['form-control', {'danger' : isIncorrectAgainPassword}]" v-model="againPassword" @keypress.enter="clickSignUp">
                  <i :class="['fa-regular', {'fa-eye-slash' : isClosed}, {'fa-eye': !isClosed}]" @click="changeIcon"></i>
                </div>
                <p v-if="isIncorrectAgainPassword" class="p-0">Repeat your password, please</p>
                <p v-if="!isSamePasswords" class="p-0">Password and repeated password have to be the same</p>

                <button class="btn btn-primary mt-3 mb-3" @click="clickSignUp">Sign Up</button>
                <span>You have account already? <router-link to="/login">Sign In</router-link></span>
              </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import HeaderComponent from '@/components/HeaderComponent.vue'

@Component({
  components: {
    HeaderComponent
  }
})
export default class Register extends Vue {
  name = ''
  userName = ''
  email = ''
  password = ''
  againPassword = ''
  inputType = 'password'
  isIncorrectName = false
  isIncorrectUsername = false
  isIncorrectEmail = false
  isIncorrectPassword = false
  isIncorrectAgainPassword = false
  isClosed = true
  isSamePasswords = true

  clickSignUp (): void {
    if (this.name && this.userName && this.password && this.againPassword && this.email && (this.password === this.againPassword)) {
      sessionStorage.setItem('user', JSON.stringify(this.userName)) // хотя и логика с переходом на страницу логин тоже логична
      this.$router.push('/')
    }

    if (!this.name) this.isIncorrectName = true
    if (!this.userName) this.isIncorrectUsername = true
    if (!this.email) this.isIncorrectEmail = true
    if (!this.password) this.isIncorrectPassword = true
    if (!this.againPassword) this.isIncorrectAgainPassword = true
    if (this.password !== this.againPassword) this.isSamePasswords = false
  }

  changeIcon (): void {
    this.isClosed = !this.isClosed
    if (this.inputType === 'password') this.inputType = 'text'
    else this.inputType = 'password'
  }

  @Watch('name')
  nameChange (): void {
    this.isIncorrectName = false
  }

  @Watch('password')
  passwordChange (): void {
    this.isIncorrectPassword = false
  }

  @Watch('userName')
  usernameChange (): void {
    this.isIncorrectUsername = false
  }

  @Watch('email')
  emailChange (): void {
    this.isIncorrectEmail = false
  }

  @Watch('againPassword')
  againPasswordChange (): void {
    this.isIncorrectAgainPassword = false
  }
}

</script>

<style scoped lang="sass">

    .register-content
        display: flex
        justify-content: center
        align-items: center

    .register-part
      display: flex
      flex-direction: column
      text-align: center
      padding-top: 150px

    .register-part span
      text-align: left

    .register-part p
      color: red

    .password-part
      position: relative

    .password-part i
      position: absolute
      right: 9px
      top: 11px
      cursor: pointer

    .btn
      width: 100%

    .danger
      background-color: #ef84845c
      border-color: red
      box-shadow: 0 0 0 .2rem rgb(255 0 0 / 25%)
</style>
