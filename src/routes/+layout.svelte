<script>
	import '../app.pcss';
</script>

<slot />

<footer class="container mx-auto text-center py-4">
	Created by <a class="link" href="//www.lauraredeker.com">Laura A. Redeker</a> ❤️ with
	<a class="link" href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
</footer>

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