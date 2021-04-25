<template>
	<section
		class="container mx-auto pt-16 lg:pt-32 text-black grid grid-cols-8 gap-x-8"
	>
		<div class="col-span-full lg:col-span-5">
			<div class="px-8 lg:px-0">
				<h2 class="decorated">Wesprzyj nas!</h2>
				<p class="opacity-80 mt-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Velit veniam harum explicabo eaque dolor. Earum optio sunt
					molestiae doloremque, totam libero fugiat ut eaque,
					blanditiis magnam nisi dicta id dolorem!
				</p>
			</div>
			<div
				class="flex flex-col p-8 mt-16 bg-black text-white w-full lg:max-w-max sm:mb-16 lg:mb-32"
			>
				<div class="donate-data w-full justify-between">
					<p
						class="mb-2 font-primary font-bold text-primary text-sm tracking-widest uppercase"
					>
						Nasz numer konta
						<span
							class="block font-primary font-bold text-base text-white lg:text-3xl"
							ref="account-number"
						>
							00 0000 0000 0000 0000 0000 0001
						</span>
					</p>
					<base-copy
						:copy-target="accountNumber"
						copy-msg="Skopiuj numer konta"
						copied-msg="Skopiowano!"
					/>
				</div>
				<div class="donate-data mt-8 w-full">
					<p
						class="font-primary font-bold text-primary text-sm tracking-widest uppercase"
					>
						Tytuł przelewu:
						<span
							ref="transfer-title"
							class="block text-xs lg:text-lg text-white mt-1"
							>Darowizna na cele statutowe Stowarzyszenia
							Dobre&nbsp;Dzieła</span
						>
					</p>
					<base-copy
						:copy-target="transferTitle"
						copy-msg="Skopiuj tytuł przelewu"
						copied-msg="Skopiowano!"
					/>
				</div>
				<div class="donate-data mt-8 w-full justify-between">
					<p
						class="font-primary font-bold text-primary text-sm tracking-widest uppercase"
					>
						Dane Stowarzyszenia:
						<span
							ref="association-data"
							class="block text-xs lg:text-lg text-white mt-1"
							>Stowarzyszenie Dobre&nbsp;Dzieła, ul. Magiczna 13,
							Kraków&nbsp;21-370</span
						>
					</p>
					<base-copy
						:copy-target="associationData"
						copy-msg="Skopiuj dane stowarzyszenia"
						copied-msg="Skopiowano!"
					/>
				</div>
			</div>
		</div>
		<div class="col-span-3 hidden lg:flex">
			<img class="self-end" src="../../assets/dd-boy.png" />
		</div>
	</section>
</template>

<script>
	import BaseCopy from '../Base/BaseCopy.vue'
	export default {
		components: { BaseCopy },
		data() {
			return {
				accountNumber: '',
				transferTitle: '',
				associationData: ''
			}
		},
		mounted() {
			this.accountNumber = this.$refs['account-number']
			this.transferTitle = this.$refs['transfer-title']
			this.associationData = this.$refs['association-data']
		}
	}
</script>

<style>
	.donate-data {
		display: grid;
		grid-gap: 1rem;
		align-items: center;
		grid-template-columns: minmax(8rem, 1fr) max-content;
	}
</style>