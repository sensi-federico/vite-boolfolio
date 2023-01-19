<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    data() {
        return {
            projects: null,
            base_api_url: "http://localhost:8000",
            loading: true,
            error: null
        };
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = error.message;
                    this.loading = false;
                });
        },
    },
    mounted() {
        this.getProjects(this.base_api_url + "/api/projects");
    },
    components: { ProjectCard }
}





</script>


<template>
    <section>
        <div class="container">
            <template v-if="projects">
                <div class="row row-cols-4 g-4">
                    <ProjectCard v-for="project in projects.data" :cover="project.cover" :title="project.title"
                        :description="project.description" :type="project.type" :technologies="project.technologies" />
                </div>
            </template>
        </div>
    </section>
</template>


<style lang="scss" scoped>

</style>