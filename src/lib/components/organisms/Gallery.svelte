<script lang="ts">
	import { scrollRef } from 'svelte-scrolling'
	import image1 from '$lib/assets/images/noise-shapes/noise-shapes-01.png'
	import image2 from '$lib/assets/images/noise-shapes/noise-shapes-02.png'
	import image3 from '$lib/assets/images/noise-shapes/noise-shapes-03.png'
	import image4 from '$lib/assets/images/noise-shapes/noise-shapes-04.png'

	import { IconArrowLeft, IconArrowRight } from '@tabler/icons-svelte'

	let images = [image1, image2, image3, image4]
	let scrollContainer: HTMLElement

	function scrollLeft() {
		scrollContainer.scrollBy({ left: -700, behavior: 'smooth' })
	}

	function scrollRight() {
		scrollContainer.scrollBy({ left: 700, behavior: 'smooth' })
	}
</script>

<div
	class="relative flex h-full"
	use:scrollRef={'noise-shapes'}>
	<div class="absolute right-10 top-10 z-50">
		<button
			class="button bg-white"
			on:click={scrollLeft}>
			<IconArrowLeft
				size={24}
				strokeWidth="1.5" />
		</button>
		<button
			class="button bg-white"
			on:click={scrollRight}>
			<IconArrowRight
				size={24}
				strokeWidth="1.5" />
		</button>
	</div>
	<div
		class="gallery relative flex h-[80vh] overflow-x-scroll px-56"
		bind:this={scrollContainer}>
		<div
			class="text-accent text-uppercase absolute left-12 top-20 z-10 mr-24 w-32 text-pretty text-xl text-white">
			Scroll to the left
			<IconArrowLeft
				size={64}
				strokeWidth="1.5" />
		</div>

		{#each images as image, i}
			<img
				src={image}
				alt="Generative art"
				class="z-10 h-full" />
		{/each}
	</div>
</div>
