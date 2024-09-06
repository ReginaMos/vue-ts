<template>
    <div>
        <HeaderComponent/>
        <div class="container">
            <div class="register-content">
              <div class="register-part mt-4">
                <h1>Register</h1>
                <span>Name</span>
                <input class="form-control" v-model="name">
                <p v-if="isIncorrectName">Write your name, please</p>

                <span>Username</span>
                <input class="form-control" v-model="userName">
                <p v-if="isIncorrectUsername">Write your username, please</p>

                <span>E-mail</span>
                <input class="form-control" v-model="email">
                <p v-if="isIncorrectEmail">Write your e-mail, please</p>

                <span>Password</span>
                <div class="password-part">
                  <input :type="inputType" class="form-control" v-model="password">
                  <i :class="['fa-regular', {'fa-eye-slash' : isClosed}, {'fa-eye': !isClosed}]" @click="changeIcon"></i>
                </div>
                <p v-if="isIncorrectPassword">Write your password, please</p>

                <span>Repeat password</span>
                <div class="password-part">
                  <input :type="inputType" class="form-control" v-model="againPassword">
                  <i :class="['fa-regular', {'fa-eye-slash' : isClosed}, {'fa-eye': !isClosed}]" @click="changeIcon"></i>
                </div>
                <p v-if="isIncorrectAgainPassword">Repeat your password, please</p>

                <button class="btn btn-primary" @click="clickSignUp">Sign Up</button>
                <span>You have account already? <router-link to="/login">Sign In</router-link></span>
              </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HeaderComponent from '@/components/HeaderComponent.vue'

@Component({
  components: {
    HeaderComponent
  }
})
export default class YourClass extends Vue {
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

  clickSignUp (): void {
    if (this.name && this.userName && this.password && this.againPassword && this.email) {
      this.$router.push('/')
    }

    if (!this.name) this.isIncorrectName = true
    if (!this.userName) this.isIncorrectUsername = true
    if (!this.email) this.isIncorrectEmail = true
    if (!this.password) this.isIncorrectPassword = true
    if (!this.isIncorrectAgainPassword) this.isIncorrectAgainPassword = true
  }

  changeIcon (): void {
    this.isClosed = !this.isClosed
    if (this.inputType === 'password') this.inputType = 'text'
    else this.inputType = 'password'
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
      gap: 15px
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
</style>
