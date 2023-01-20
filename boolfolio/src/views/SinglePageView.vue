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

    <div class="single-project">
        {{ $route.params.slug }}

        {/* Your project data here */}
    </div>
</template>


<style lang="scss" scoped>

</style>