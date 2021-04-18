<template>
    <div>
        <the-navbar />
        <the-hero />
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheHero from './components/TheHero.vue'

export default {
    name: 'App',
    components: {
        TheHero,
        TheNavbar
    }
}
</script>

<style></style>
