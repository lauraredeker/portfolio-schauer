<script lang="ts">
	import { Title } from '$lib/Constants.js'
	import HeroSection from '$lib/components/organisms/HeroSection.svelte'
	import GallerySection from '$lib/components/sections/GallerySection.svelte'

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data
</script>

<svelte:head>
	<title>{Title} - {data.content?.data?.title || 'Hi there'}</title>
</svelte:head>

<main class="min-h-screen w-full">
	<HeroSection />

	<GallerySection />
</main>
