<script lang="ts">
	// 300, 400, 700, 800
	import '@fontsource/almarai'
	// Supports weights 400-900
	import '@fontsource-variable/playfair-display'
	import '../app.pcss'

	import Navbar from '$lib/components/organisms/Navbar.svelte'
	import Footer from '$lib/components/organisms/Footer.svelte'
	import { page } from '$app/stores'
	import { FullName } from '$lib/Constants'
</script>

<svelte:body />

<Navbar segment={$page.url.pathname} />

<div
	class="fixed left-2 hidden origin-top-left -rotate-90 text-base font-normal uppercase tracking-wide md:top-2/3 md:block dark:text-white">
	Hi, I CREATE GENERATIVE ART
	<span class="text-white opacity-60 dark:text-black">{FullName}</span>
</div>

<div
	class="fixed left-auto right-2 hidden origin-top-right rotate-90 text-base font-normal uppercase tracking-wide text-white opacity-60 md:top-3/4 md:block dark:text-purple-300">
	made with touchdesigner
</div>

<main
	class="flex min-h-screen w-screen flex-col justify-between overflow-x-hidden text-black dark:text-white">
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

	:global(body::after) {
		background-image: url($lib/assets/images/noise.png);
		background-repeat: repeat;
		opacity: 0.8;
		position: fixed;
		pointer-events: none;
		z-index: -1;
		content: '';
		display: block;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
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
		background-color: #5e30f7;
	}
</style>
