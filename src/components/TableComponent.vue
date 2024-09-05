<template>
    <div>
        <div class="table-content">
            <div class="table-part">
                <h3 class="authors-title">Authors</h3>
                <table>
                    <thead>
                        <th>Author</th>
                        <th>Function</th>
                        <th>Status</th>
                        <th>Employed</th>
                    </thead>
                    <tbody>
                        <tr v-for="item, ind in employees" :key="ind">
                            <td>
                                <div class="name">
                                    <img :src="item.img" alt="">
                                    <div class="name-text">
                                        <span>{{ item.name }}</span>
                                        <p>{{ item.email }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="function">
                                    <span>{{ item.function }}</span>
                                </div>
                            </td>
                            <td>
                                <div class="status">
                                    <span :class="item.status === 'online' ? 'on' : 'off'">{{ item.status.toUpperCase() }}</span>
                                </div>
                            </td>
                            <td>
                                <div class="employed">
                                    <span>{{ item.employed }}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-part">
                <h3 class="authors-title">Products</h3>
                <table>
                    <thead>
                        <th>Project</th>
                        <th>Budget</th>
                        <th>Status</th>
                        <th>Completion</th>
                    </thead>
                    <tbody>
                        <tr v-for="item, ind in projects" :key="ind">
                            <td>
                                <div class="name">
                                    <img :src="item.img" alt="">
                                    <div class="name-text">
                                        <span>{{ item.name }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="budget">
                                    <span>$ {{ item.budget }}</span>
                                </div>
                            </td>
                            <td>
                                <div class="status-product">
                                    <span>{{ item.status }}</span>
                                </div>
                            </td>
                            <td>
                                <div class="completion">
                                    <span>{{ item.completion }}</span>
                                </div>
                            </td>
                            <td class="points" @click="openPoints">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import TableData from '@/mixins/table'

@Component
export default class MainTablePart extends Mixins(TableData) {
  mixins: [TableData]

  openPoints (): void {
    console.log('hehe')
  }
}

</script>

<style scoped lang="sass">
    .table-content
        padding-top: 20px
        padding-left: 30px
        display: flex
        flex-direction: column
        gap: 30px
        background-color: #c5def380

    .table-part
        background-color: #fff
        border-radius: 10px
        padding: 30px

    .name
        display: flex
        align-items: center

    .name-text
        margin-left: 50px

    .name-text span
        font-weight: 700
        font-size: 17px

    table
        width: 75%
        // border-collapse: separate
        border-spacing: 75px 15px

    tr
        border-top: 2px solid #e3e0e0
        padding: 10px

    // .authors-title
    //     margin-left: 100px

    .status span
        border-radius: 15px
        padding: 7px 10px
        color: #fff

    .on
        background-color: green

    .off
        background-color: grey

    .points
        cursor: pointer

</style>
