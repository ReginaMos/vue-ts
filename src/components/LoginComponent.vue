<template>
    <div>
        <HeaderComponent/>
        <div class="container">
            <div class="login-content">
                <div class="login-part">
                    <h1>Login</h1>
                    <span>Username</span>
                    <input type="text" class="form-control mb-4" v-model="userName">
                    <span>Password</span>
                    <input type="text" class="form-control mb-3" v-model="password">
                    <button class="btn btn-primary" :disabled="!(userName && password)" @click="clickBtn">Login</button>
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

    clickBtn (): void {
      this.$router.push('/')
    }
}

</script>

<style scoped lang="sass">

    .login-content
        display: flex
        justify-content: center

    .login-part
        max-width: 400px

</style>
