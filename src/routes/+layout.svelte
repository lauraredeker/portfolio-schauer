<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { page } from '$app/stores'

	import '../app.pcss'
</script>

<svelte:body />

<Navbar segment={$page.url.pathname} />

<main
	class="tw-w-full tw-overflow-x-clip flex min-h-screen flex-col justify-between text-black dark:text-white">
	<div
		class="leading-wide fixed left-4 hidden origin-top-left -rotate-90 text-base font-normal uppercase tracking-wide md:top-96 md:block">
		Hi, I CREATE GENERATIVE ART
	</div>

	<slot />

	<Footer segment={$page.url.pathname} />
</main>

<style lang="postcss">
	* {
		box-sizing: border-box;
	}

	:root {
		--background: #f2e9e4;
		--background-dark: #0f0f0f;
	}

	:global(html),
	:global(body) {
		font-size: 18px;
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Almarai', sans-serif;
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

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}
</style>
