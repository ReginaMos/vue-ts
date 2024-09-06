<template>
    <div>
        <div class="header">
            <div class="header-content">
                <div class="left-menu-part">
                    <i class="fa-solid fa-bars" @click="clickMenu"></i>
                    <img src="@/assets/free-icon-money-2695217.png" alt="logo" class="img-header" @click="goToHomeImg">
                </div>
                <nav>
                    <ul class="nav">
                        <router-link to="/login" class="no-line"><li @click="changeSign"><i class="fa-solid fa-right-to-bracket mr-2"></i>{{ info !== null ? 'Sign Out' : 'Sign In'}}</li></router-link>
                        <li><i class="fa-solid fa-bell"></i></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class YourClass extends Vue {
    info = JSON.parse(sessionStorage.getItem('user'))

    goToHomeImg (): void {
      if (this.info !== null) this.$router.push('/')
    }

    clickMenu (): void {
      this.$emit('changeOpen')
    }

    changeSign (): void {
      console.log('hehe')
      sessionStorage.clear()
    }
}

</script>

<style scoped lang="sass">

@import ../styles/header

</style>
