<template>
	<section
		class="container mx-auto pt-32 px-8 text-black grid grid-cols-8 gap-x-8"
	>
		<h2
			class="decorated col-span-full self-start mb-5 2xl:mb-0 2xl:col-span-3 2xl:sticky 2xl:top-16"
		>
			Poznaj stowarzyszenie
		</h2>
		<div class="col-span-full lg:col-span-5">
			<h3>Dlaczego istniejemy?</h3>
			<p class="opacity-80">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Maiores aut ab alias iusto quibusdam. Distinctio eaque facilis
				vitae cum fugiat, rem sit amet architecto sed obcaecati facere
				animi est at delectus adipisci fugit dolores corrupti quisquam
				velit ad, esse qui! Eos necessitatibus nemo laborum voluptate
				hic, fugit culpa? Dicta delectus mollitia magnam eveniet.
			</p>
			<h3>Nasz cel</h3>
			<p class="opacity-80">
				Voluptates accusantium maiores harum, laudantium molestias
				repudiandae assumenda quo molestiae praesentium cupiditate
				nobis, veniam nemo, facere nihil alias voluptatibus dolores
				vitae fuga exercitationem? Soluta atque nesciunt at autem vel
				labore ex debitis aspernatur culpa corporis. Molestiae dolore at
				ipsum vel culpa facilis totam temporibus quis iste voluptatem.
				Perspiciatis at a adipisci aut. Asperiores officia nesciunt
				praesentium dolor ad dignissimos, nostrum doloribus maiores
				eligendi error officiis accusantium id corporis molestiae iusto
				nobis doloremque explicabo nulla a vel ipsam voluptas obcaecati!
				Non odit nam ipsum animi beatae commodi repudiandae alias qui
				odio cupiditate omnis quos consequatur, at hic, facere
				quibusdam! Accusamus praesentium eligendi autem quae eaque, nisi
				accusantium similique tempore laudantium nam quo aut quisquam.
			</p>
		</div>
	</section>
	<section class="bg mt-16 lg:mt-32 bg-black">
		<div class="container mx-auto px-8 py-16 lg:py-48 text-white">
			<h2 class="mb-12 lg:mb-36">Nasze wartości</h2>
			<div class="grid grid-cols-3 gap-16">
				<div class="value mx-auto col-span-full lg:col-span-1">
					<h3 class="text-underline">Nasza siła to nasza wiara</h3>
					<p class="mt-12 opacity-80">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis, ipsam provident ut illo perspiciatis dolorum
						voluptate.
					</p>
				</div>
				<div class="value mx-auto col-span-full lg:col-span-1">
					<h3 class="text-underline">
						Pomaganie w dążeniu do wolności
					</h3>
					<p class="mt-12 opacity-80">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis, ipsam provident ut illo perspiciatis dolorum
						voluptate.
					</p>
				</div>
				<div class="value mx-auto col-span-full lg:col-span-1">
					<h3 class="text-underline">Człowiek jest ważny</h3>
					<p class="mt-12 opacity-80">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis, ipsam provident ut illo perspiciatis dolorum
						voluptate.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {}
</script>

<style>
	h3:not(:first-of-type) {
		margin-top: 3rem;
	}

	p {
		@apply opacity-95 text-xl max-w-prose;
		line-height: 1.6;
	}
</style>