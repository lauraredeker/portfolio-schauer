<script>
	import { Email, FullName } from '$lib/Constants'
</script>

<svelte:head>
	<title>Michael Schauer Generative Art - Contact</title>
</svelte:head>

<main>
	<div class="container w-full px-5 py-20 md:px-10">
		<h1 class="text-center text-4xl md:text-6xl">Contact</h1>
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
</main>

<style>
</style>
