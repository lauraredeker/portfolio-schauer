<script lang="ts">
	import BackgroundImage5 from '$lib/assets/design5.png'
	import BackgroundImage4 from '$lib/assets/design4.png'
	import BackgroundImage3 from '$lib/assets/design3.png'
	import { LightBackground, DarkBackground } from '$lib/Constants'
	import { customBackground } from '$lib/store'

	$: isDark = false
</script>

<svelte:head>
	<title>Michael Schauer - Hello!</title>
</svelte:head>

<main class="min-h-screen w-full overflow-x-hidden text-white">
	<section>
		<h1 class="fixed left-10 top-24 z-0 text-5xl font-extrabold md:text-8xl">Hi, I am Michael.</h1>

		<div class="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				<h2 class="ml-96 mt-80 text-pretty leading-10">
					And I'm watching all the stars burn out<br />
					Trying to pretend that <i>I care</i>
				</h2>
				<button
					class="ml-96 mt-20 bg-white px-4 py-2 text-black"
					on:click={() => {
						isDark ? customBackground.set(LightBackground) : customBackground.set(DarkBackground)
						isDark = !isDark
					}}
				>
					{isDark ? 'turn on the light' : 'make it dark'}
				</button>
			</div>
			<div>
				<img
					src={BackgroundImage5}
					alt="logo"
					class="w-full"
				/>
			</div>
			<div>
				<img
					src={BackgroundImage4}
					alt="logo"
					class="w-full rotate-90"
				/>
			</div>
			<div>
				<img
					src={BackgroundImage3}
					alt="logo"
					class="w-full rotate-90"
				/>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		background-image: url({design1});
	}
</style>
