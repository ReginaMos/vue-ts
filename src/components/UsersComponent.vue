<template>
    <div class="users">
        <div class="user-box" v-for="item, idx in users" :key="idx">
            <img :src="item.img" :alt="item.name">
            <h4>{{ item.name }}</h4>
            <p>Function: {{ item.function }}</p>
            <button class="btn" @click="openModal(idx)">More info</button>
        </div>
        <div v-if="clickBtn" class="modal-info">
            <div class="img-part">
                <img :src="users[clickIdx].img" :alt="users[clickIdx].name">
                <div class="text">
                    <h5>About</h5>
                    <p>{{ users[clickIdx].about }}</p>
                </div>
            </div>
            <div class="text-part">
                <p><span>Name:</span> {{ users[clickIdx].name }}</p>
                <p><span>E-mail:</span> {{ users[clickIdx].email }}</p>
                <p><span>Phone:</span> {{ users[clickIdx].phone }}</p>
                <p><span>Function:</span> {{ users[clickIdx].function }}</p>
                <p><span>Employed:</span> {{ users[clickIdx].employed }}</p>
                <p><span>Status:</span> {{ users[clickIdx].status }}</p>
                <p><span>Projects:</span>
                    <ul>
                        <li v-for="item, idx in users[clickIdx].project" :key="idx">
                            {{ item }}
                        </li>
                    </ul>
                </p>
            </div>
            <i class="fa-solid fa-xmark" @click="closeModal"></i>
        </div>
        <div v-if="clickBtn" class="overlay" @click="closeModal"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { User } from '@/mixins/index'
import usersData from '@/assets/users.json'

@Component
export default class YourClass extends Vue {
    clickBtn = false
    users: User[] = usersData as User[]
    clickIdx: number

    openModal (idx: number): void {
      this.clickBtn = true
      this.clickIdx = idx
    }

    closeModal (): void {
      this.clickBtn = false
    }
}

</script>

<style scoped lang="sass">
    .users
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        gap: 30px
        margin: 30px

    .user-box
        padding: 30px
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2)
        width: 20%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

    .user-box img
        margin-bottom: 20px

    .btn
        background-color: #9cbef7
        color: #fff

    .btn:hover
        background-color: #576db7

    .modal-info
        z-index: 1100
        background-color: #fff

        position: fixed
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

        display: flex
        justify-content: space-around
        padding: 20px

    .modal-info i
        position: fixed
        right: -45px
        top: -45px

        font-size: 30px
        border: 2px solid #000
        border-radius: 50%
        padding: 7px 10px

        cursor: pointer

    .modal-info i:hover
        background: #576db7

    .img-part
        max-width: 40%
        display: flex
        flex-direction: column
        align-items: center

    .text
        display: flex
        flex-direction: column
        align-items: flex-start
        width: 100%

    .text h5
        font-size: 20px
        color: #576db7
        font-weight: 700

    .img-part img
        width: 45%
        margin-bottom: 20px

    .text-part span
        font-size: 17px
        color: #576db7
        font-weight: 700

    .overlay
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: rgba(0, 0, 0, 0.5)
        z-index: 100
</style>
