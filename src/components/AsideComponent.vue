<template>
    <div>
        <div class="aside-content pt-4">
            <ul>
                <router-link to="/" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/'}]">
                        <li>Main</li>
                    </div>
                </router-link>
                <router-link to="/table" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/tables'}]">
                        <li>Tables</li>
                    </div>
                </router-link>
                <router-link to="/bills" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/bills'}]">
                        <li>Bills</li>
                    </div>
                </router-link>
                <router-link to="/users" class="no-line">
                    <div :class="['menu-elem', {'active' : $route.path === '/users'}]">
                        <li>Users</li>
                    </div>
                </router-link>

            </ul>

            <ul>
                <li>Profile Info</li>
                <router-link to="/login" class="no-line">
                    <div class="menu-elem">
                        <li>Sign In</li>
                    </div>
                </router-link>
                <router-link to="/register" class="no-line">
                    <div class="menu-elem">
                        <li>Sign Up</li>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins, Prop, Watch } from 'vue-property-decorator'

@Component
export default class YourClass extends Vue {}

</script>

<style scoped lang="sass">

@import ../styles/aside

</style>
