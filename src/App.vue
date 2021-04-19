<template>
	<div class="debug-screens">
		<the-navbar />
		<the-hero />
		<the-main-container>
			<the-about-section />
		</the-main-container>
	</div>
</template>

<script>
	import TheAboutSection from './components/Page/TheAboutSection.vue'
	import TheHero from './components/Page/TheHero.vue'
	import TheMainContainer from './components/Page/TheMainContainer.vue'
	import TheNavbar from './components/Page/TheNavbar.vue'
	export default {
		name: 'App',
		components: {
			TheHero,
			TheNavbar,
			TheMainContainer,
			TheAboutSection
		}
	}
</script>

<style></style>
