<template>
    <div class="download">
        <h1 class="resume">Resume</h1>
        <a class="button" href="../assets/cv.pdf" download="">
            <i class="pe-7s-download"></i>
            Download CV
        </a>
    </div>
</template>

<script>
    export default {
        name: 'resume',
        path: '/resume',
    }
</script>
<style>

    .download {
        z-index: 10;
        text-align: center;
    }
</style>