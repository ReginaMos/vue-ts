import { Vue, Component } from 'vue-property-decorator'
import { NewData } from '@/mixins/index'

@Component
export default class Data extends Vue {
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
