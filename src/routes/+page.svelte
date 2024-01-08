<script lang="ts">
	import Counter from '$lib/components/Counter.svelte'
</script>

<svelte:head>
	<title>Michael Schauer - Hello!</title>
</svelte:head>

<main class="h-screen w-full text-white">
	<section class="flex h-full w-full items-center justify-center">
		<div class="text-center">
			<h1 class="text-8xl font-bold">Hi, I am Bebi.</h1>
			<Counter />
		</div>
	</section>
</main>
