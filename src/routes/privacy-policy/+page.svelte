<script>
	import { Email } from '$lib/Constants'
</script>

<svelte:head>
	<title>Michael Schauer Generative Art - Privacy Policy</title>
</svelte:head>

<main>
	<div class="container w-full px-5 py-20 md:px-10">
		<h1 class="text-center text-4xl md:text-6xl">Privacy Policy</h1>
		<section class="mt-10">
			<h4 class="mb-2 mt-10 md:mt-16">Contact</h4>
			<p>
				If you have any questions about this Privacy Policy, You can contact me by
				<a
					class="rounded-md px-1 font-semibold text-purple-500 underline underline-offset-4 hover:bg-gray-200 hover:text-black dark:text-purple-200 dark:hover:bg-black dark:hover:text-white"
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
