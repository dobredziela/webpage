<template>
	<footer class="p-2 bg-primary-600 font-primary text-white text-center">
		&copy; Stowarzyszenie Dobre Dzieła {{ date }}
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				date: new Date().getFullYear()
			}
		}
	}
</script>

<style>
</style>