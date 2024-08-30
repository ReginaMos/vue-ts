import { Vue, Component } from 'vue-property-decorator'
import { Country, NewData } from '@/mixins/index'

@Component
export default class Main extends Vue {
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
    ];

    data: NewData[] = [
      {
        title: 'MONEY',
        count: 2500,
        percent: 51,
        img: 'https://img.icons8.com/?size=100&id=34005&format=png&color=000000',
        color: 'pink'
      },
      {
        title: 'USERS',
        count: 300,
        percent: 15,
        img: 'https://img.icons8.com/?size=100&id=23265&format=png&color=000000',
        color: '#38e5388c'
      },
      {
        title: 'CLIENTS',
        count: 7800,
        percent: 4,
        img: 'https://img.icons8.com/?size=100&id=2828&format=png&color=000000',
        color: '#f9f964ba'
      },
      {
        title: 'SALES',
        count: 385000,
        percent: 20,
        img: 'https://img.icons8.com/?size=100&id=21448&format=png&color=000000',
        color: '#6e95ffba'
      }
    ]
}
