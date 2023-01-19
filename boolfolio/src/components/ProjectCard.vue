<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        cover: String,
        description: String,
        type: String,
        technologies: Array,
    },
    methods: {
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + "/storage/" + path;
            }
        },
    }
}
</script>

<template>

    <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
        <img class="card-image rounded-top" :src="getImagePath(cover)" alt="">
        <div class="card-body">
            <h4>{{ title }}</h4>
            <p>
                {{ description }}
            </p>
            <a href="#">Read more</a>
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
