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

@import ../styles/table

</style>
