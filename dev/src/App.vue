<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>
<script>
    import Nav from "./modules/Nav";
    export default {
        components: {Nav}
    }
</script>