<template>
    <div>
        <div class="header">
            <div class="header-content">
                <div class="left-menu-part">
                    <i class="fa-solid fa-bars" @click="clickMenu"></i>
                    <img src="@/assets/free-icon-money-2695217.png" alt="logo" class="img-header" @click="goToHomeImg">
                </div>
                <div v-if="$route.path === '/'" class="notif" @click="openNotification">
                    <div><i class="fa-solid fa-bell"></i></div>
                </div>
                <div v-if="isOpenNotification" class="notification-info">
                    <ul>
                        <li>
                             <input type="checkbox"> Notification 1
                        </li>
                        <li>
                             <input type="checkbox"> Notification 1
                        </li>
                        <li>
                             <input type="checkbox"> Notification 1
                        </li>
                        <li>
                             <input type="checkbox"> Notification 1
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class YourClass extends Vue {
    info = JSON.parse(sessionStorage.getItem('user'))
    isOpenNotification = false

    goToHomeImg (): void {
      if (this.info !== null) this.$router.push('/')
    }

    clickMenu (): void {
      this.$emit('changeOpen')
    }

    openNotification (): void {
      this.isOpenNotification = !this.isOpenNotification
    }
}

</script>

<style scoped lang="sass">

@import ../styles/header

</style>
