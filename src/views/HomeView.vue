<template>
  <div>
    <MainComponent/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainComponent from '@/components/MainComponent.vue'

@Component({
  components: {
    MainComponent
  }
})
export default class HomeView extends Vue {
  mounted () {
    if (JSON.parse(sessionStorage.getItem('user')) === null) this.$router.push('/login')
  }
}
</script>
