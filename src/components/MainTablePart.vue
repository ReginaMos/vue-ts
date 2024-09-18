<template>
    <div>
      <div class="content pl-4">
        <div class="table-title">Sales by Country</div>
        <table class="table">
          <thead>
              <th>Country</th>
              <th>Sales</th>
              <th>Value</th>
              <th>Bounce</th>
          </thead>
          <tbody>
            <tr v-for="item, ind in countries" :key="ind">
              <td class="name">
                <img :src="item.flag" alt="">
                <div class="name-text">
                  <span>{{ item.name }}</span>
                </div>
              </td>
              <td>
                <div class="sales">
                  <span>{{ item.sales }}</span>
                </div>
              </td>
              <td>
                <div class="value">
                  <span>{{ item.value }}</span>
                </div>
              </td>
              <td>
                <div class="bounce">
                  <span>{{ item.baunce }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Countries from '@/mixins/main'

@Component
export default class MainTablePart extends Mixins(Countries) {
  mixins: [Countries]
}
</script>

<style scoped lang="sass">

@import '../styles/main-table'

</style>
