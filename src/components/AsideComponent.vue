<template>
    <div>
        <div class="aside-content pt-4">
            <ul class="p-0">
                <router-link to="/" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/'}]">
                        <li><i class="fa-solid fa-house mr-3"></i>Main</li>
                    </div>
                </router-link>
                <router-link to="/table" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/table'}]">
                        <li><i class="fa-solid fa-diagram-project mr-3"></i>Tables</li>
                    </div>
                </router-link>
                <router-link to="/projects" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/projects'}]">
                        <li><i class="fa-solid fa-money-bills mr-3"></i>Projects</li>
                    </div>
                </router-link>
                <router-link to="/users" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/users'}]">
                        <li><i class="fa-solid fa-users mr-2"></i> Users</li>
                    </div>
                </router-link>

            </ul>

            <ul class="p-0">
                <li class="pl-2"><i class="fa-solid fa-user mr-3"></i>{{ userInfo }}</li>
                <router-link to="/login" class="no-line">
                    <div class="menu-elem" @click="deleteInfo">
                        <li><i class="fa-solid fa-right-to-bracket mr-3"></i>Sign Out</li>
                    </div>
                </router-link>
                <router-link to="/register" class="no-line">
                    <div class="menu-elem" @click="deleteInfo">
                        <li><i class="fa-solid fa-user-plus mr-3"></i>Sign Up</li>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AsideComponent extends Vue {
    userInfo = JSON.parse(sessionStorage.getItem('user'))

    deleteInfo (): void {
      console.log('hehe')
      sessionStorage.clear()
    }
}

</script>

<style scoped lang="sass">

@import ../styles/aside

</style>
