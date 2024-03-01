<script>
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { page } from '$app/stores'
	import '../app.pcss'
</script>

<NavBar segment={$page.url.pathname} />

<div class="w-screen bg-black">
	<main class="min-h-screen">
		<slot />
	</main>
	<Footer segment={$page.url.pathname} />
</div>

<style>
	:global(html),
	:global(body) {
		font-size: 18px;
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		color: white;
		font-family: 'Poppins', sans-serif;
		background-color: #101112;
	}

	:global(::selection) {
		color: white;
		background-color: #5e30f7;
	}
</style>
