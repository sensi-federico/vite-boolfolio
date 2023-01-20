<script>

export default {
    name: "AppNav"
}





</script>


<template>
    <section>
        <nav class="navbar navbar-expand-sm navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">primary</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarID">
                    <div class="navbar-nav">
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home <span
                                class="visually-hidden">(current)</span></router-link>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>


<style lang="scss" scoped>

</style>