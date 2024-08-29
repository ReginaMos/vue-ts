<template>
    <div>
        <HeaderComponent
          @changeOpen="changeOpen"
        />
        <div class="main-content">
            <AsideComponent :class="{'hidden': !hidden}"/>
            <div class="router ml-4">
              <router-view/>
            </div>
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
export default class YourClass extends Vue {
  hidden = true

  changeOpen (data: boolean): void {
    this.hidden = !this.hidden
  }
}

</script>

<style scoped lang="sass">

  .main-content
    display: flex
    gap: 30px
    width: 100%

  .hidden
    display: none
</style>
