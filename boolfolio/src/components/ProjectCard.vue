<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String,
        type: Object,
        technologies: Array,
        slug: String,
    },
    methods: {
        // getImagePath(path) {
        //     console.log(path);
        //     if (path) {
        //         return this.base_api_url + "/storage/" + path;
        //     }
        // },
    }
}
</script>

<template>

    <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
        <div class="card-body">
            <h4>{{ title }}</h4>
            <p>
                {{ description }}
            </p>
            <router-link :to="{ name: 'single-page', params: { slug: slug } }">SinglePage</router-link>
        </div>
        <div class="card-footer text-muted">
            <div class="type">
                <strong>type: </strong>
                <span v-if="type">
                    {{ type.name }}
                </span>
                <span v-else>Uncategorized</span>
            </div>
            <div class="technologies">
                <strong>technologies: </strong>

                <span v-for="technology in technologies">
                    #{{ technology.name }}
                </span>
            </div>
        </div>
    </div>

</template>
