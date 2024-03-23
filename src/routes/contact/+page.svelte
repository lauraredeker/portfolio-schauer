<script lang="ts">
	import { Title, Email } from '$lib/Constants'

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data
</script>

<svelte:head>
	<title>{data?.content?.data?.title || 'Default Title'} - {Title}</title>
</svelte:head>

<div class="main-container">
	<h1>
		{data.content?.data?.headline || 'Default Title'}
	</h1>
	<section class="mt-10 text-pretty text-center">
		<p>
			{data.content?.data?.intro}
		</p>
		<a
			href={`mailto:${Email}`}
			class="button mt-10 inline-block">
			{Email}
		</a>
	</section>
</div>

<style>
</style>
