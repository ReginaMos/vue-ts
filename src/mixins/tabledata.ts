import { Vue, Component } from 'vue-property-decorator'
import { TablePoint } from '@/mixins/index'

@Component
export default class tablePoints extends Vue {
    table: TablePoint[] = [
      {
        x: 1,
        y: 10
      },
      {
        x: 2,
        y: 12
      },
      {
        x: 4,
        y: 3
      },
      {
        x: 5,
        y: 7
      },
      {
        x: 7,
        y: 17
      },
      {
        x: 9,
        y: 9
      }
    ]
}
