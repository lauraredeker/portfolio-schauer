<script lang="ts">
	import { Title } from '$lib/Constants.js'
	import HeroSection from '$lib/components/organisms/HeroSection.svelte'
	import Gallery from '$lib/components/organisms/Gallery.svelte'
	import { scrollRef } from 'svelte-scrolling'

	import noise1 from '$lib/assets/images/noise-shapes/noise-shapes-01.png'
	import noise2 from '$lib/assets/images/noise-shapes/noise-shapes-02.png'
	import noise3 from '$lib/assets/images/noise-shapes/noise-shapes-03.png'
	import noise4 from '$lib/assets/images/noise-shapes/noise-shapes-04.png'
	import noise5 from '$lib/assets/images/noise-shapes/noise-shapes-05.png'
	import noise7 from '$lib/assets/images/noise-shapes/noise-shapes-07.png'
	import noise8 from '$lib/assets/images/noise-shapes/noise-shapes-08.png'
	import noise9 from '$lib/assets/images/noise-shapes/noise-shapes-09.png'

	let noiseImages = [
		{ name: 'NOISE SHAPES', description: '', image: noise1 },
		{ name: 'NOISE SHAPES', description: '', image: noise2 },
		{ name: 'NOISE SHAPES', description: '', image: noise3 },
		{ name: 'NOISE SHAPES', description: '', image: noise4 },
		{ name: 'NOISE SHAPES', description: '', image: noise5 },
		{ name: 'NOISE SHAPES', description: '', image: noise7 },
		{ name: 'NOISE SHAPES', description: '', image: noise8 },
		{ name: 'NOISE SHAPES', description: '', image: noise9 }
	]

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data
</script>

<svelte:head>
	<title>{Title} - {data.content?.data?.title || 'Hi there'}</title>
</svelte:head>

<main class="min-h-screen w-full">
	<HeroSection />

	<section
		class="min-h-screen bg-black pb-20 text-white dark:bg-gray-900"
		use:scrollRef={'noise-shapes'}>
		<Gallery
			images={noiseImages}
			seriesNumber="01"
			title="Noise Shapes" />
	</section>
	<section
		class="min-h-screen bg-primary-400 pb-20 dark:bg-primary-800 dark:text-white"
		use:scrollRef={'glitch-paintings'}>
		<Gallery
			images={noiseImages}
			seriesNumber="02"
			title="Glitch Paintings" />
	</section>
</main>
