import { Vue, Component } from 'vue-property-decorator'
import { Country } from '@/mixins/index'

@Component
export default class Countries extends Vue {
    countries: Country[] = [
      {
        name: 'USA',
        flag: 'https://img.icons8.com/?size=100&id=fIgZUHgwc76e&format=png&color=000000',
        sales: 2500,
        value: 137.5,
        baunce: 25.7
      },
      {
        name: 'Thailand',
        flag: 'https://img.icons8.com/?size=100&id=T40NpiZvOx9I&format=png&color=000000',
        sales: 2000,
        value: 150.5,
        baunce: 29.4
      },
      {
        name: 'Great Britain',
        flag: 'https://img.icons8.com/?size=100&id=ShNNs7i8tXQF&format=png&color=000000',
        sales: 1450,
        value: 54.9,
        baunce: 15.7
      },
      {
        name: 'Mexico',
        flag: 'https://img.icons8.com/?size=100&id=b6i15KBP6HpV&format=png&color=000000',
        sales: 1300,
        value: 128,
        baunce: 45.7
      },
      {
        name: 'China',
        flag: 'https://img.icons8.com/?size=100&id=vZLJDLqVMupW&format=png&color=000000',
        sales: 3700,
        value: 259.5,
        baunce: 38.7
      }
    ]
}
