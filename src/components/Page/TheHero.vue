<template>
	<header class="header bg flex overflow-x">
		<div
			class="header-box container mx-auto px-4 sm:px-0 flex flex-col relative lg:flex-row lg:items-center md:justify-between"
		>
			<div
				class="flex flex-col items-center text-white text-center w-full lg:text-left lg:items-start"
			>
				<p
					class="text-line mb-8 font-text text-primary text-sm max-w-prose uppercase tracking-widest"
				>
					Stowarzyszenie dla ludzi
				</p>
				<h1
					class="hero-headline font-primary font-bold text-4xl leading-snug sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					Realizujemy wyłącznie
					<span class="block mt-4 mb-24 text-underline"
						>dobre dzieła!</span
					>
				</h1>
				<button
					class="button px-12 py-4 bg-primary-600 text-white text-xl font-primary font-medium hover:bg-primary-200 hover:text-primary-800"
				>
					Poznaj nas teraz!
				</button>
			</div>
			<img
				src="../../assets/check.png"
				class="header-img absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 sm:-bottom-4 lg:transform-none lg:static lg:max-h-96 xl:max-h-full"
			/>
		</div>
		<div
			class="w-full h-full z-0 absolute pointer-events-none overflow-hidden"
		>
			<img
				src="../../assets/check-outline.svg"
				class="check-outline absolute bottom-32 left-1/2 transform -translate-x-1/2 lg:transform-none opacity-80 lg:-bottom-12"
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
		bottom: 8vh;
		left: -19vw;
	}

	@media screen and (max-width: 639px) {
		.header-box {
			margin-top: 8vh;
		}
	}

	@media screen and (min-width: 640px) {
		.check-outline {
			width: 100vw;
		}
	}
</style>
