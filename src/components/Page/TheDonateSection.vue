<template>
	<section
		class="container mx-auto pt-32 text-black grid grid-cols-8 gap-x-8"
	>
		<div class="col-span-5">
			<h2 class="decorated">Wesprzyj nas!</h2>
			<p class="opacity-80 mt-4">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
				veniam harum explicabo eaque dolor. Earum optio sunt molestiae
				doloremque, totam libero fugiat ut eaque, blanditiis magnam nisi
				dicta id dolorem!
			</p>
			<div>
				<div
					class="bank-number flex flex-col p-8 mt-16 bg-black text-white max-w-max"
				>
					<p
						class="mb-2 uppercase font-primary font-bold text-primary text-sm tracking-widest"
					>
						Nasz numer konta
					</p>
					<div class="flex w-full justify-between">
						<p
							class="font-primary font-bold text-3xl"
							ref="account-number"
						>
							00 0000 0000 0000 0000 0000 0001
						</p>
						<base-copy
							class="ml-8 self-end"
							:copy-target="accountNumber"
							copy-msg="Skopiuj numer konta"
							copied-msg="Skopiowano!"
						/>
					</div>
					<div class="flex mt-5 w-full justify-between">
						<p
							class="uppercase font-primary font-bold text-primary text-sm tracking-widest"
						>
							Tytuł przelewu:
							<span
								ref="transfer-title"
								class="block text-white mt-1"
								>Darowizna na cele statutowe Stowarzyszenia
								Dobre Dzieła</span
							>
						</p>
						<base-copy
							class="ml-8 self-end"
							:copy-target="transferTitle"
							copy-msg="Skopiuj tytuł przelewu"
							copied-msg="Skopiowano!"
						/>
					</div>
					<div class="flex mt-5 w-full justify-between">
						<p
							class="uppercase font-primary font-bold text-primary text-sm tracking-widest"
						>
							Dane Stowarzyszenia:
							<span
								ref="association-data"
								class="block text-white mt-1"
								>Stowarzyszenie Dobre Dzieła, ul. Magiczna 13,
								Kraków 21-370</span
							>
						</p>
						<base-copy
							class="ml-8 self-end"
							:copy-target="associationData"
							copy-msg="Skopiuj dane stowarzyszenia"
							copied-msg="Skopiowano!"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-3">
			<img src="../../assets/dd-boy.png" />
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
</style>