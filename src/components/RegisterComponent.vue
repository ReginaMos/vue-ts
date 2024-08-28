<template>
    <div>
        <HeaderComponent/>
        <div class="container">
            <div class="register-content">
                <h1>Register</h1>
                <span>Name</span>
                <input class="form-control">
                <p>Write your name, please</p>
                <span>Username</span>
                <input class="form-control">
                <p>Write your username, please</p>
                <span>E-mail</span>
                <input class="form-control">
                <p>Write your e-mail, please</p>
                <span>Password</span>
                <input class="form-control">
                <p>Write your password, please</p>
                <span>Repeat password</span>
                <input class="form-control">
                <p>Repeat your password, please</p>

                <button class="btn btn-primary">Sign Up</button>
                <p>You have account already? <router-link to="/login">Sign In</router-link></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import HeaderComponent from '@/components/HeaderComponent.vue'

@Component({
  components: {
    HeaderComponent
  }
})
export default class YourClass extends Vue {}

</script>

<style scoped lang="sass">

</style>
