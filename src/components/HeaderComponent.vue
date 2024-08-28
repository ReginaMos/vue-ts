<template>
    <div>
        <div class="header">
            <div class="container p-3">
                <div class="header-content">
                    <router-link to="/"><img src="@/assets/free-icon-money-2695217.png" alt="logo" class="img-header"></router-link>
                    <nav>
                        <ul class="nav">
                            <router-link to="/login" class="no-line"><li><i class="fa-solid fa-right-to-bracket mr-2"></i>Sign In</li></router-link>
                            <li><i class="fa-solid fa-bell"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class YourClass extends Vue {}

</script>

<style scoped lang="sass">

@import ../styles/header

</style>
