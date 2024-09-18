<template>
    <div>
        <HeaderComponent/>
        <div class="container">
            <div class="login-content">
                <div class="login-part">
                    <h1>Login</h1>
                    <span class="text-left">Username</span>
                    <input type="text" class="form-control" v-model="userName">
                    <span>Password</span>
                    <div class="password-part">
                        <input :type="inputType" class="form-control" v-model="password" @keypress.enter="clickBtn">
                        <i :class="['fa-regular', {'fa-eye-slash' : isClosed}, {'fa-eye': !isClosed}]" @click="changeIcon"></i>
                    </div>
                    <button class="btn btn-primary mb-2" :disabled="!(userName && password)" @click="clickBtn">Login</button>
                    <p>You don't have account? <router-link to="/register">Sign Up</router-link></p>
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
    userName = ''
    password = ''
    inputType = 'password'
    isClosed = true

    clickBtn (): void {
      sessionStorage.setItem('user', JSON.stringify(this.userName))
      this.$router.push('/')
    }

    changeIcon (): void {
      this.isClosed = !this.isClosed
      if (this.inputType === 'password') this.inputType = 'text'
      else this.inputType = 'password'
    }
}

</script>

<style scoped lang="sass">

@import ../styles/login

</style>
