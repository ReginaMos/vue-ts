import { Vue, Component } from 'vue-property-decorator'
import { Author, Product } from '@/mixins/index'

@Component
export default class TableData extends Vue {
    employees: Author[] = [
      {
        img: 'https://img.icons8.com/?size=100&id=BEj9clzR0U0h&format=png&color=000000',
        function: 'Programmer',
        name: 'Moreno Horton',
        email: 'morenohorton@amril.com',
        status: 'online',
        employed: '2018-03-18'
      },
      {
        img: 'https://img.icons8.com/?size=100&id=lujIZ8CzPnHY&format=png&color=000000',
        function: 'Manager',
        name: 'Mcconnell Stuart',
        email: 'mcconnellstuart@amril.com',
        status: 'offline',
        employed: '2016-01-09'
      },
      {
        img: 'https://img.icons8.com/?size=100&id=103823&format=png&color=000000',
        function: 'Executive',
        name: 'House Gamble',
        email: 'housegamble@amril.com',
        status: 'online',
        employed: '2017-07-03'
      },
      {
        img: 'https://img.icons8.com/?size=100&id=tvBMdL7aArII&format=png&color=000000',
        function: 'Programmer',
        name: 'Arlene Gallagher',
        email: 'arlenegallagher@amril.com',
        status: 'offline',
        employed: '2020-01-28'
      },
      {
        img: 'https://img.icons8.com/?size=100&id=65220&format=png&color=000000',
        function: 'Executive',
        name: 'Hall Mullen',
        email: 'hallmullen@amril.com',
        status: 'offline',
        employed: '2021-12-10'
      },
      {
        img: 'https://img.icons8.com/?size=100&id=MI0PNZas26mH&format=png&color=000000',
        function: 'Programmer',
        name: 'Jason Kallen',
        email: 'jasonkallen@amril.com',
        status: 'online',
        employed: '2017-03-10'
      }
    ];

    projects: Product[] =[
      {
        status: 'done',
        img: 'https://img.icons8.com/?size=100&id=AVQyR7yVZtgD&format=png&color=000000',
        name: 'Cassie',
        completion: 100,
        budget: 2528
      },
      {
        status: 'cancelled',
        img: 'https://img.icons8.com/?size=100&id=3tL355qYoTqf&format=png&color=000000',
        name: 'Charles',
        completion: 60,
        budget: 2782
      },
      {
        status: 'working',
        img: 'https://img.icons8.com/?size=100&id=AhvTd3uagvOe&format=png&color=000000',
        name: 'Margat',
        completion: 89,
        budget: 2490
      },
      {
        status: 'working',
        img: 'https://img.icons8.com/?size=100&id=kVDlcr2svRuG&format=png&color=000000',
        name: 'Jo',
        completion: 48,
        budget: 2493
      },
      {
        status: 'working',
        img: 'https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000',
        name: 'Rose',
        completion: 89,
        budget: 3024
      },
      {
        status: 'done',
        img: 'https://img.icons8.com/?size=100&id=2mhXYLZct4Sd&format=png&color=000000',
        name: 'Bass',
        completion: 100,
        budget: 3237
      },
      {
        status: 'cancelled',
        img: 'https://img.icons8.com/?size=100&id=Bri4HBrgCsPa&format=png&color=000000',
        name: 'Clare',
        completion: 97,
        budget: 755
      }
    ]
}
