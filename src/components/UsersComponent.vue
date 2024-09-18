<template>
    <div class="users">
        <div class="user-box" v-for="item, idx in users" :key="idx">
            <img :src="item.img" :alt="item.name">
            <h4>{{ item.name }}</h4>
            <p><span>Function: </span>{{ item.function }}</p>
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
                <p><span>Status:</span>{{ users[clickIdx].status }}</p>
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
export default class UserClass extends Vue {
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

@import ../styles/user

</style>
