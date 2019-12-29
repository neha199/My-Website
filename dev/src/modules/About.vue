<template>
    <div class="home">
        <Nav></Nav>
        <img src = "./wallpaper2.png" class="bg-image"/>
        <h1 class="about">About</h1>
    </div>
</template>

<script>
    import Nav from "./Nav";
    export default {
        name: 'about',
        path: '/about',
        components: {Nav}
    }
</script>

<style>
    .bg-image {
        min-width: 100%;
        z-index: -100;
        min-height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }

    .about {
        z-index: 10;
        font-size: 50px;
        text-align: center;
    }
</style>