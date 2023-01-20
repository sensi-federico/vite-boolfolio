<script>
import axios from 'axios'

export default {
    name: 'SinglePageView',

    data() {
        return {
            project: null,
            loading: true,
            api_base_url: 'http://localhost:8000'
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.api_base_url + '/api/projects/' + this.$route.params.slug
        console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                } else {
                    /* TODO: handle the not found project  
                    404 
                    */
                    // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })

    }
}
</script>

<template>

    <div class="container" v-if="project">
        <h1>Title: {{ project.title }}</h1>
        <h4>Slug: {{ $route.params.slug }} </h4>
        <p class="lead">Description: {{ project.description }}</p>
        <div class="div d-flex">
            Technologies:
            <p v-for="technology in project.technologies">#{{ technology.name }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>