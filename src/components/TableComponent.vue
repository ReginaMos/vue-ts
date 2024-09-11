<template>
    <div>
        <div class="table-content">
            <div class="table-part">
                <div class="title-part">
                    <h3 class="authors-title">Authors</h3>
                    <router-link to='/users'><button class="btn">Подробнее</button></router-link>
                </div>
                <table class="table table-striped">
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
                <div class="title-part">
                    <h3 class="authors-title">Products</h3>
                    <router-link to='/bills'><button class="btn">Подробнее</button></router-link>
                </div>
                <table class="table table-striped">
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
import router from '@/router'

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

    .title-part
        display: flex
        justify-content: space-between
        margin-bottom: 10px

    .btn
        background-color: #9cbef7
        color: #fff

    .btn:hover
        background-color: #576db7

    .name
        display: flex
        align-items: center

    .name-text
        margin-left: 50px

    .name-text span
        font-weight: 700
        font-size: 17px

    table
        border-spacing: 75px 15px

    tr
        border-top: 2px solid #e3e0e0
        padding: 10px

    td
        vertical-align: middle

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
