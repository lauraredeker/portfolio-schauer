<script>
	import NavBar from '$lib/components/NavBar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { page } from '$app/stores'
	import '../app.pcss'
</script>

<NavBar segment={$page.url.pathname} />

<div class="mx-auto flex h-screen max-w-screen-2xl flex-col justify-between">
	<slot />
	<Footer />
</div>

<style lang="scss">
	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		color: white;
		font-family: 'Poppins', sans-serif;
		background-color: #000;
	}

	:global(::selection) {
		color: white;
		background-color: #5e30f7;
	}
</style>
