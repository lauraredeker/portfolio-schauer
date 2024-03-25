<script lang="ts">
	import { Title } from '$lib/Constants.js'
	import HeroSection from '$lib/components/organisms/HeroSection.svelte'
	import Gallery from '$lib/components/organisms/Gallery.svelte'

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data
</script>

<svelte:head>
	<title>{Title} - {data.content?.data?.title || 'Hi there'}</title>
</svelte:head>

<main class="min-h-screen w-full">
	<HeroSection />

	<section
		class="min-h-screen bg-black py-20 text-white"
		id="gallery1">
		<Gallery />
	</section>
</main>
