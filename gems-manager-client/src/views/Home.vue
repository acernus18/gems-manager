<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <Converter />
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue'
    import Converter from "../components/Converter";

    export default {
        name: 'home',
        components: {
            Converter,
            HelloWorld
        }
    }
</script>
