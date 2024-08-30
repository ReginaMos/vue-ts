<template>
    <div>
      <!-- <div class="header"> -->
        <HeaderComponent
          @changeOpen="changeOpen"
        />
      <!-- </div> -->
      <div class="main-content">
          <div class="aside-part">
            <AsideComponent :class="{'hidden': !hidden}"/>
          </div>
          <div class="router">
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

  changeOpen (): void {
    this.hidden = !this.hidden
  }
}

</script>

<style scoped lang="sass">
  .main-content
      padding-top: 100px

  .hidden
    display: none

  .aside-part
    position: fixed
    //z-index: 1000

  .router
    margin-left: 252px
</style>
