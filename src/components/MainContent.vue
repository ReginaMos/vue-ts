<template>
    <div>
      <div class="content">
        <div class="info-part">
            <MainInfoPart v-for="item in data"
            :key="item.title"
            :elem="item"
            />
        </div>
        <MainGraphicPart />
        <MainTablePart />
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import MainTablePart from '@/components/MainTablePart.vue'
import MainInfoPart from '@/components/MainInfoPart.vue'
import MainGraphicPart from '@/components/MainGraphicPart.vue'

import Data from '@/mixins/main'

@Component({
  components: {
    MainTablePart,
    MainInfoPart,
    MainGraphicPart
  }
})
export default class MainContent extends Mixins(Data) {
  mixins: [Data]
}

</script>

<style scoped lang="sass">

  .info-part
    display: flex
    gap: 50px
    flex-wrap: wrap
    justify-content: center
    padding: 40px
    background-color: #def6f9

  .content
    display: flex
    flex-direction: column
    gap: 30px

</style>
