<template>
    <div>
        <div class="table-content">
            <div class="table-part">
                <div class="title-part">
                    <h3 class="authors-title">Authors</h3>
                    <router-link to='/users'><button class="btn">More info</button></router-link>
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
                    <router-link to='/projects'><button class="btn">More info</button></router-link>
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
                                    <div class="progress">
                                        <div :class="['progress-bar', {'bg-danger' : item.status === 'cancelled'}, {'bg-warning' : item.completion < 50}, {'bg-info' : item.completion >= 50 && item.completion < 100}, {'bg-success' : item.completion === 100}]" role="progressbar" :style="{width: + item.completion + '%'}" :aria-valuenow="item.completion" aria-valuemin="0" aria-valuemax="100">
                                            {{ item.completion }} %
                                        </div>
                                    </div>
                                </div>
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
export default class Table extends Mixins(TableData) {
  mixins: [TableData]
}

</script>

<style scoped lang="sass">

@import ../styles/table

</style>
