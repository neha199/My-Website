<template>
    <div class="home">
        <img src = "./wallpaper.png" class="bg-image"/>
        <h1 class="name">Neha R Jain</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        path: '/home',
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

    .name {
        z-index: 10;
        font-size: 50px;
        text-align: center;
    }
</style>