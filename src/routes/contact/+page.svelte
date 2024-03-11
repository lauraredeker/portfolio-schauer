<script lang="ts">
	import { Email, FullName } from '$lib/Constants'
	import { isPreviewing } from '@builder.io/sdk-svelte'
	import { PUBLIC_API_KEY } from '$env/static/public'

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let contactData: any
</script>

<svelte:head>
	<title>Michael Schauer Generative Art - Contact</title>
</svelte:head>

<div class="container mx-auto w-full max-w-screen-xl px-5 py-20 md:px-10">
	<h1>{contactData}</h1>
	<section class="mt-10">
		<p>
			{contactData.data.intro}
		</p>
	</section>
</div>

<style>
</style>
