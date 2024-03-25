<script lang="ts">
	// 300, 400, 700, 800
	import '@fontsource/almarai'
	// Supports weights 400-900
	import '@fontsource-variable/playfair-display'
	import '../app.pcss'

	import Navbar from '$lib/components/organisms/Navbar.svelte'
	import Footer from '$lib/components/organisms/Footer.svelte'
	import { page } from '$app/stores'
</script>

<svelte:body />

<Navbar segment={$page.url.pathname} />

<main
	class="flex min-h-screen w-screen flex-col justify-between overflow-x-hidden text-black dark:text-white">
	<div
		class="leading-wide fixed left-4 hidden origin-top-left -rotate-90 text-base font-normal uppercase tracking-wide md:top-96 md:block">
		Hi, I CREATE GENERATIVE ART
	</div>

	<slot />

	<Footer segment={$page.url.pathname} />
</main>

<style lang="postcss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		--background: #f2e9e4;
		--background-dark: #0f0f0f;
	}

	:global(html),
	:global(body) {
		margin: 0;
		font-size: 20px;
		transition: background-color 1s ease 0s;
		position: relative;
		font-family: 'Almarai', sans-serif;
	}

	:global(body) {
		overflow-x: hidden;
		min-width: fit-content;
	}

	:global(html) {
		background-color: var(--background);

		&.dark {
			background-color: var(--background-dark);
		}
	}

	:global(::selection) {
		color: white;
		background-color: #5e30f7;
	}
</style>
