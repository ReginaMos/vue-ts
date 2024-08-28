<template>
    <div>
        <div class="header">
            <div class="container p-3">
                <div class="header-content">
                    <router-link to="/"><img src="@/assets/free-icon-money-2695217.png" alt="logo" class="img-header"></router-link>
                    <nav>
                        <ul class="nav">
                            <router-link to="/login" class="no-line"><li>Sign In</li></router-link>
                            <li><i class="fa-solid fa-bell"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins, Prop, Watch } from 'vue-property-decorator'

@Component
export default class YourClass extends Vue {}

</script>

<style scoped lang="sass">

@import ../styles/header

</style>
