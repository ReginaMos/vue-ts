<template>
  <div>
    <HomePage/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HomePage from '@/components/HomePage.vue'

@Component({
  components: {
    HomePage
  }
})
export default class HomeView extends Vue {

}
</script>
