<template>
    <div>
        <div class="info-box">
            <div class="first-text-part">
                <div class="text">
                    <h2 class="title">{{ elem.title }}</h2>
                    <h2 class="money">{{ elem.count }}</h2>
                </div>
                <img :src="elem.img" alt="icon-obj" :style="{ backgroundColor: elem.color }">
            </div>
            <p><span>{{ elem.percent }}%</span> since yesterday</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { NewData } from '@/mixins/index'

@Component
export default class YourClass extends Vue {
    @Prop(Object) readonly elem!:NewData
}

</script>

<style scoped lang="sass">

@import '../styles/main-info'

</style>
