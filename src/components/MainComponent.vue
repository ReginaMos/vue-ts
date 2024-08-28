<template>
    <div>
        <HeaderComponent/>
        <div class="main-content">
            <AsideComponent/>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HeaderComponent from '@/components/HeaderComponent.vue'
import AsideComponent from '@/components/AsideComponent.vue'

@Component({
  components: {
    HeaderComponent,
    AsideComponent
  }
})
export default class YourClass extends Vue {}

</script>

<style scoped lang="sass">

  .main-content
    display: flex
    gap: 30px

</style>
