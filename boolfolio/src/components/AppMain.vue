<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            loading: true,
            error: null,
            max: 100
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results)
                    this.projects = response.data.results
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false
                })
        },
        getImagePath(path) {
            console.log(path)
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
        },
        trimDescription(text) {
            if (text.lenght > this.max) {
                return text.slice(0, this.max) + '...'
            }
            return text
        }

    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects')
    }
}





</script>

<template>
    <h1 class="text-center">Main</h1>
</template>

<style lang="scss" scoped>

</style>