<template>
	<div class="bg">
		<section
			id="contact"
			class="container mx-auto py-16 lg:py-32 text-white"
		>
			<div class="max-w-3xl mx-auto">
				<div class="px-8">
					<h2 class="text-4xl text-center">Bądźmy w kontakcie</h2>
					<p
						class="opacity-85 mt-8 mb-16 mx-auto text-center text-lg lg:text-base"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quae commodi fugit sequi autem nam dolor sapiente
						mollitia veritatis!
					</p>
				</div>
				<div class="bg-white p-8 lg:p-16 mt-8 text-black lg:shadow-2xl">
					<form class="contact-form" @submit.prevent="sendEmail">
						<div class="flex flex-col">
							<label
								for="user_name"
								class="relative mb-2 font-primary font-bold"
								:data-msg="res.getErrors('username')[0]"
							>
								<p data-required class="mb-3">Imię</p>
								<input
									class="mt-0 pl-3 block w-full px-0.5 border-0 border-b-2 border-gray-400 bg-gray-50 focus:ring-0 focus:border-black"
									:class="classes('username')"
									@input="
										validate('username'),
											capitalizeUsername(
												$event.target.value
											)
									"
									type="text"
									id="user_name"
									name="user_name"
									placeholder="Jan"
									v-model.trim="username"
									required
								/>
							</label>
						</div>
						<div class="flex flex-col mt-7">
							<label
								for="user_email"
								class="relative mb-2 font-primary font-bold"
								:data-msg="res.getErrors('email')[0]"
							>
								<p data-required class="mb-3">Email</p>
								<input
									class="mt-0 pl-3 block w-full px-0.5 border-0 border-b-2 border-gray-400 bg-gray-50 focus:ring-0 focus:border-black"
									:class="classes('email')"
									@input="
										validate('email'),
											normalizeEmail($event.target.value)
									"
									type="email"
									id="user_email"
									name="user_email"
									placeholder="jan.doe@gmail.com"
									v-model.trim="email"
									required
								/>
							</label>
						</div>
						<div class="flex flex-col mt-7">
							<label
								for="message"
								class="relative mb-2 font-primary font-bold"
								:data-msg="res.getErrors('message')"
							>
								<p data-required class="mb-3">
									Twoja wiadomość
								</p>
								<textarea
									class="w-full pl-3 border-0 border-b-2 border-gray-400 bg-gray-50 focus:ring-0 focus:border-black"
									:class="classes('message')"
									:data-msg="res.getErrors('message')"
									@input="validate('message')"
									id="message"
									name="message"
									rows="4"
									placeholder="Tutaj zostaw nam swoją wiadomość..."
									v-model="message"
									required
								>
								</textarea>
							</label>
						</div>
						<input
							class="w-full sm:w-max mt-8 lg:mt-12 px-12 py-4 bg-primary-600 text-white tracking-wide font-primary font-medium hover:bg-primary-200 hover:text-primary-800 cursor-pointer"
							type="submit"
							value="Wyślij nam wiadomość"
						/>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import emailjs from 'emailjs-com'
	import throttle from 'lodash.throttle'
	import classNames from 'vest/classNames'
	import validate from '../../validations.js'

	export default {
		data() {
			return {
				username: '',
				email: '',
				message: '',
				res: validate.get()
			}
		},
		computed: {
			classes() {
				return classNames(this.res, {
					valid: 'valid',
					invalid: 'invalid',
					warning: 'warning'
				})
			}
		},
		methods: {
			capitalizeUsername(str) {
				return (this.username = str
					.split(' ')
					.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
					.join(' '))
			},
			normalizeEmail(str) {
				return (this.email = str.toLowerCase())
			},
			validate(field) {
				this.res = validate(
					{
						username: this.username,
						email: this.email,
						message: this.message
					},
					field
				)
			},
			sendEmail(e) {
				if (!this.res.hasErrors()) {
					alert('wysłano email!')
					emailjs
						.sendForm(
							'service_2069sdl',
							'contact_5nJrN11kkcmV8F',
							e.target,
							'user_Bfq46wonmFAdmyH3hZM9a'
						)
						.then(
							(result) => {
								console.log('SUCCESS!', result.status, result.text)
							},
							(error) => {
								console.log('FAILED...', error)
							}
						)
				}
			}
		}
	}
</script>

<style scoped>
	.valid {
		border-color: var(--clr-primary);
	}

	.invalid {
		@apply border-red-500;
	}

	form label::before {
		content: attr(data-msg);
		position: absolute;
		bottom: -1.5rem;
		left: 0;
		font-size: 0.9rem;
		letter-spacing: 0.125px;
		@apply text-red-500 font-medium;
	}

	[data-required]::after {
		content: '*';
		@apply text-red-500 inline-block ml-1;
	}
</style>