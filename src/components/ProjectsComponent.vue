<template>
    <div class="projects">
        <div class="project-elem" v-for="elem, idx in projects" :key = idx>
            <div class="left-part">
                <h3>{{ elem.name }}</h3>
                <img :src="elem.img" :alt="elem.name">
                <div class="progress">
                    <div :class="['progress-bar',
                    {'bg-danger' : elem.status === 'cancelled'},
                    {'bg-warning' : elem.completion < 50},
                    {'bg-info' : elem.completion >= 50 && elem.completion < 100},
                    {'bg-success' : elem.completion === 100}]"
                    role="progressbar"
                    :style="{width: + elem.completion + '%'}"
                    :aria-valuenow="elem.completion" aria-valuemin="0" aria-valuemax="100">
                        {{ elem.completion }} %
                    </div>
                </div>
            </div>
            <div class="about">
                <h5>About</h5>
                <p>{{ elem.about }}</p>
            </div>
            <div class="info-part">
                <p><span>Developers:</span>
                    <ul>
                        <li v-for="dev, idx in elem.developers" :key="idx"> {{ dev }}</li>
                    </ul>
                </p>
                <div class="status-part">
                    <span>Status: </span>
                    <div :class="['status', elem.status === 'done' ? 'done' : elem.status === 'cancelled' ? 'cancel' : 'work']">{{ elem.status }}</div>
                </div>
                <p><span>Start Date: </span>{{ elem.startDate }}</p>
                <p v-if="elem.status === 'working'"><span>Deadline: </span>{{ elem.deadline }}</p>
                <p v-else-if="elem.status === 'done' "><span>End Date: </span>{{ elem.endDate }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Project } from '@/mixins/index'
import projectsData from '@/assets/projects.json'

@Component
export default class ProjectsClass extends Vue {
    projects: Project[] = projectsData as Project[]
}

</script>

<style scoped lang="sass">

    .projects
        margin: 20px
        display: flex
        flex-direction: column
        gap: 20px

    .project-elem
        display: flex
        align-items: center
        justify-content: center

        text-align: left

        gap: 10vw

        min-height: 20vh
        width: 100%

    .about
        width: 27vw

    .left-part
        display: flex
        flex-direction: column
        gap: 15px
        align-items: center
        width: 15vw

    .progress
        width: 100%

    .info-part span
        font-size: 17px
        color: #576db7
        font-weight: 700

    .about
        text-align: left

    .about h5
        color: #576db7
        font-weight: 700

    .status-part
        display: flex
        align-items: center
        gap: 10px

    .status
        padding: 3px 8px
        border-radius: 15px
        color: #fff

    .done
        background-color: #499f70

    .work
        background-color: #4e4ea7

    .cancel
        background-color: #cb5151
        color: #000
</style>
