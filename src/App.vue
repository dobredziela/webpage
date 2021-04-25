<template>
	<the-navbar />
	<the-hero />
	<the-main-container>
		<the-about-section />
		<the-donate-section />
		<the-contact-section />
	</the-main-container>
	<the-footer />
</template>

<script>
	import TheAboutSection from './components/Page/TheAboutSection.vue'
	import TheContactSection from './components/Page/TheContactSection.vue'
	import TheDonateSection from './components/Page/TheDonateSection.vue'
	import TheFooter from './components/Page/TheFooter.vue'
	import TheHero from './components/Page/TheHero.vue'
	import TheMainContainer from './components/Page/TheMainContainer.vue'
	import TheNavbar from './components/Page/TheNavbar.vue'
	export default {
		name: 'App',
		components: {
			TheHero,
			TheNavbar,
			TheMainContainer,
			TheAboutSection,
			TheDonateSection,
			TheContactSection,
			TheFooter
		}
	}
</script>