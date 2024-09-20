<template>
  <div>
    <DateTimePicker/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DateTimePicker from '@/components/DateTimePicker.vue'

@Component({
  components: {
    DateTimePicker
  }
})
export default class HomeView extends Vue {
  mounted () {
    if (JSON.parse(sessionStorage.getItem('user')) === null) this.$router.push('/login')
  }
}
</script>
