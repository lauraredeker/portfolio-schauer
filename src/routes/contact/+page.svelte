<script>
	import { Email, FullName } from '$lib/Constants'
</script>

<svelte:head>
	<title>Michael Schauer Generative Art - Contact</title>
</svelte:head>

<div class="container mx-auto w-full max-w-screen-xl px-5 py-20 md:px-10">
	<h1>Contact</h1>
	<section class="mt-10">
		<p>
			Email:
			<a
				class="link"
				href={`mailto:${Email}`}
			>
				{Email}
			</a>
		</p>
	</section>
</div>

<style>
</style>
