import { Vue, Component } from 'vue-property-decorator'
import { Author } from '@/mixins/index'

@Component
export default class Employees extends Vue {
    employees: Author[] = [
        {
            name: 'string',
            email: 'string',
            function: 'Manager',
            status: 'online' ,
            employed: 'string'
        },
    ]
}
