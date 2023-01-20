<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'HomeView',
    components: {
        ProjectCard
    },
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
    }
}
</script>

<template>

    <div class="container">
        <h1>Home Page</h1>
        <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci optio, tempore maiores sit
            asperiores
            sed est nulla esse quos quam laudantium, voluptatibus minus officiis assumenda. Ex vitae eos earum.
        </p>

        <div v-if="projects">
            <div class="row row-cols-4 g-4">
                <ProjectCard v-for="project in projects.data" :title="project.title" :description="project.description"
                    :type="project.type" :technologies="project.technologies" :slug="project.slug" />
            </div>
        </div>

    </div>
</template>