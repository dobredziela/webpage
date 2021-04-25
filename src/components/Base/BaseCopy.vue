<template>
	<button
		ref="copy-btn"
		class="copy-box relative flex items-center select-none"
		@click="copyToClipboard"
		@keydown.space="copyToClipboard"
		@mouseenter="setCopyMsg"
	>
		<i
			class="copy-btn cursor-pointer h-8 w-8 text-primary flex justify-center items-center hover:bg-primary hover:text-white active:bg-white active:text-primary"
		>
			<svg
				class="h-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
				/>
			</svg>
		</i>
		<p
			class="copy-text absolute z-10 bg-primary-200 text-primary-800 pointer-events-none select-none text-xs p-2 uppercase tracking-widest"
		>
			{{ showMsg }}
		</p>
	</button>
</template>
<script>
	export default {
		props: ['copyTarget', 'copyMsg', 'copiedMsg'],
		data() {
			return {
				copyContent: '',
				showMsg: this.copyMsg
			}
		},
		mounted() {
			this.$nextTick(function () {
				this.copyContent = this.copyTarget.textContent.trim()
			})
		},
		methods: {
			copyToClipboard() {
				const copyBtn = this.$refs['copy-btn']
				const copy = document.createElement('textarea')

				copy.classList.add('sr-only')
				copy.setAttribute('readonly', '')
				copyBtn.appendChild(copy)

				copy.value = this.copyContent
				copy.select()

				const selected =
					document.getSelection().rangeCount > 0 // Check if there is any content selected previously
						? document.getSelection().getRangeAt(0) // Store selection if found
						: false // Mark as false to know no selection existed before
				copy.select() // Select the <textarea> content
				document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
				copyBtn.removeChild(copy) // Remove the <textarea> element
				if (selected) {
					// If a selection existed before copying
					document.getSelection().removeAllRanges() // Unselect everything on the HTML document
					document.getSelection().addRange(selected) // Restore the original selection
				}

				this.showMsg = this.copiedMsg
			},
			setCopyMsg() {
				this.showMsg = this.copyMsg
			}
		}
	}
</script>

<style>
	.copy-text {
		text-align: center;
		min-width: max-content;
		right: 0%;
		opacity: 0;
		transition: transform 0.3s ease-out, opacity 0.15s ease-in;
		backface-visibility: hidden;
	}

	.copy-btn:hover ~ .copy-text {
		transform: translate(-2.5rem, 0);
		opacity: 1;
	}
</style>