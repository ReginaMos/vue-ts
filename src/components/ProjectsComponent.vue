<template>
    <div>
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
                <p><span>Developers</span>{{ elem.developers }}</p>
                <p><span>Start Date</span>{{ elem.startDate }}</p>
                <p v-if="elem.status !== 'done'"><span>Deadline</span>{{ elem.deadline }}</p>
                <p v-else><span>End Date</span>{{ elem.endDate }}</p>
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

</style>
