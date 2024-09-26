<template>
    <div>
        <div class="header">
            <div class="header-content">
                <div class="left-menu-part">
                    <i class="fa-solid fa-bars" @click="clickMenu"></i>
                    <img src="@/assets/free-icon-money-2695217.png" alt="logo" class="img-header" @click="goToHomeImg">
                </div>
                <div>{{ info }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HeaderComponent extends Vue {
    info = JSON.parse(sessionStorage.getItem('user'))

    goToHomeImg (): void {
      if (this.info !== null) this.$router.push('/')
    }

    clickMenu (): void {
      this.$emit('changeOpen')
    }
}

</script>

<style scoped lang="sass">

@import ../styles/header

</style>
