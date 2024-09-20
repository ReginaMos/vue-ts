<template>
  <v-app>
    <v-container>
      <v-date-picker
         v-model="datePicker"
         scrollable
         color="primary"
         :min="min"
         :max="max"
        :day-style="getDayStyle"
        @click:date="toggleDateColor"
      ></v-date-picker>
    <div>
      <h3>Выбранные даты:</h3>
        <ul>
          <li v-for="date in coloredDays" :key="date">{{ date }}</li>
        </ul>
    </div>
   </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DatePickerComponent extends Vue {
datePicker: string | null = null
coloredDays: string[] = [] // Массив для хранения окрашенных дат
min = '2024-01-01' // Замените на нужные даты
max = '2024-12-31'

toggleDateColor (date: Date): void {
  const dateString = date.toISOString().substr(0, 10)
  // Если дата уже окрашена, удаляем ее; если нет - добавляем
  const index = this.coloredDays.indexOf(dateString)
  if (index !== -1) {
    this.coloredDays.splice(index, 1) // Удаляем дату
  } else {
    this.coloredDays.push(dateString) // Добавляем дату
  }
}

getDayStyle (date: Date): { [key: string]: string } {
  const dateString = date.toISOString().substr(0, 10)
  return this.coloredDays.includes(dateString)
    ? { backgroundColor: 'red', borderRadius: '50%' } // Устанавливаем цвет
    : {}
}
}
</script>

<style>
/* Дополнительные стили для улучшения визуализации */
.v-picker--date .v-btn--active {
border-radius: 50%;
}
</style>
