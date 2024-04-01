<script lang="ts">
	import { onMount } from 'svelte'

	// 300, 400, 700, 800
	import '@fontsource/almarai'

	// Supports weights 400-900
	import '@fontsource-variable/playfair-display'
	import '../app.pcss'

	import Navbar from '$lib/components/organisms/Navbar.svelte'
	import Footer from '$lib/components/organisms/Footer.svelte'
	import { page } from '$app/stores'
	import { FullName } from '$lib/Constants'

	onMount(() => {})
</script>

<svelte:body />

<Navbar segment={$page.url.pathname} />

<div
	class="fixed left-2 hidden origin-top-left -rotate-90 text-base font-normal uppercase tracking-wide md:top-2/3 md:block dark:text-white">
	Hi, I CREATE GENERATIVE ART
	<span class="ml-2 text-white opacity-60 dark:text-black">
		{FullName}
	</span>
</div>

<div
	class="fixed left-auto right-2 hidden origin-top-right rotate-90 text-base font-normal uppercase tracking-wide text-white opacity-60 md:top-1/2 md:block dark:text-black">
	made with touchdesigner
</div>

<main
	class="section-2 flex min-h-screen w-screen flex-col justify-between overflow-x-hidden text-black dark:text-white">
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
		--white: var(--background);
		--background-dark: #0f0f0fe3;
		--black: var(--background-dark);
		--primary-color: #1aa5c0;
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
		max-width: 100%;
		width: 100%;
		overscroll-behavior: none;
		min-width: fit-content;
	}

	:global(.noise-bg::after),
	:global(body::after) {
		background-image: url($lib/assets/images/noise.png);
		background-repeat: repeat;
		background-size: 10%;
		background-blend-mode: multiply;
		opacity: 0.6;
		position: fixed;
		pointer-events: none;
		z-index: 0;
		content: '';
		display: block;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	:global(.noise-bg.-white::after) {
		background-image: url($lib/assets/images/noise-white.png);
		opacity: 0.3;
	}

	:global(html.dark body::after) {
		mix-blend-mode: difference;
	}

	:global(html) {
		background-color: var(--background);

		&.dark {
			background-color: var(--background-dark);
		}
	}

	:global(::selection) {
		color: white;
		background-color: var(--primary-color);
	}

	:global(::-webkit-scrollbar) {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
	/* Optional: show position indicator in red */
	:global(::-webkit-scrollbar-thumb) {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
		scrollbar-width: none; /* Firefox */
	}
</style>
