<template>
	<header class="header bg flex overflow-x gap-8">
		<div
			class="header-box container mx-auto px-8 flex flex-col relative md:flex-row md:justify-between lg:items-center"
		>
			<div
				class="relative z-30 flex flex-col items-center text-white text-center w-full md:text-left md:items-start"
			>
				<p
					class="text-line mb-8 font-text text-primary text-sm max-w-prose uppercase tracking-widest"
				>
					Stowarzyszenie dla ludzi
				</p>
				<h1
					class="hero-headline font-primary font-bold leading-snug text-4xl xl:text-6xl 2xl:text-7xl mb-16 lg:mb-24"
				>
					Realizujemy wyłącznie
					<span
						class="mx-auto block sm:mt-4 text-underline md:mr-0 md:ml-0"
						>dobre dzieła!</span
					>
				</h1>
				<a
					href="#about-us"
					class="button px-12 py-4 bg-primary-600 text-white text-xl font-primary font-medium hover:bg-primary-200 hover:text-primary-800"
				>
					Poznaj nas
				</a>
			</div>
			<img
				src="../../assets/check.png"
				class="absolute z-20 -bottom-12 left-1/2 w-5/6 transform -translate-x-1/2 sm:-bottom-16 md:max-w-lg lg:transform-none lg:static lg:max-h-96 xl:max-w-max xl:max-h-full"
			/>
		</div>
		<div
			class="w-full h-full z-0 absolute pointer-events-none overflow-hidden"
		>
			<img
				src="../../assets/check-outline.svg"
				class="check-outline absolute bottom-24 left-1/2 transform -translate-x-1/2 opacity-30 md:-bottom-8 lg:transform-none lg:opacity-80 lg:bottom-16"
			/>
		</div>
	</header>
</template>

<script>
</script>

<style>
	.header {
		min-height: 640px;
		height: 100vh;
	}

	.check-outline {
		width: 200%;
		max-width: unset;
		bottom: 10vh;
		left: -21vw;
	}

	@media screen and (max-width: 767px) {
		.header-box {
			margin-top: 15vh;
		}
	}

	@media screen and (max-width: 1023px) {
		.header-box {
			margin-top: 12vh;
		}
	}

	@media screen and (min-width: 1024px) {
		.check-outline {
			width: 100vw;
		}
	}
</style>
