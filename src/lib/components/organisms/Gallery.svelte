<script lang="ts">
	import { scrollRef } from 'svelte-scrolling'

	import { IconArrowLeft, IconArrowRight } from '@tabler/icons-svelte'

	type Image = {
		name: string
		description: string
		image: string
	}
	export let images: Image[]

	let scrollContainer: HTMLElement
	let hasScrolledLeft = false
	let hasScrolledRight = false

	function scrollLeft(x: number = -700) {
		scrollContainer.scrollBy({ left: x, behavior: 'smooth' })
	}

	function scrollRight(x: number = 700) {
		scrollContainer.scrollBy({ left: x, behavior: 'smooth' })
	}

	function checkScroll() {
		hasScrolledLeft = scrollContainer?.scrollLeft > 40
		hasScrolledRight =
			scrollContainer?.scrollLeft + 100 <=
			scrollContainer?.scrollWidth - scrollContainer?.clientWidth
	}

	$: scrollContainer = scrollContainer
	$: hasScrolledLeftComputed = hasScrolledLeft
	$: hasScrolledRightComputed = hasScrolledRight
</script>

<div
	class="relative flex h-full"
	use:scrollRef={'noise-shapes'}>
	<div class="absolute right-10 top-0 z-50">
		<button
			class={`mr-3 transition-opacity ${
				hasScrolledLeftComputed ? 'opacity-100 hover:text-primary-300' : 'cursor-default opacity-30'
			}`}
			on:mouseover={() => scrollLeft(-400)}
			on:focus={() => scrollLeft(-400)}
			on:click={() => scrollLeft(-1200)}>
			<IconArrowLeft
				size={40}
				stroke="2.5" />
		</button>
		<button
			class={`ml-3 transition-opacity ${
				hasScrolledRightComputed
					? 'opacity-100 hover:text-primary-300'
					: 'cursor-default opacity-30'
			}`}
			on:mouseover={() => scrollRight(400)}
			on:focus={() => scrollRight(400)}
			on:click={() => scrollRight(1200)}>
			<IconArrowRight
				size={40}
				stroke="2.5" />
		</button>
	</div>
	<div
		class="gallery relative flex h-[90vh] items-center overflow-x-scroll px-56 py-20"
		bind:this={scrollContainer}
		on:scroll={checkScroll}>
		<div
			class="text-accent text-uppercase z-10 mr-24 flex w-32 flex-col self-end text-pretty text-xl text-white">
			Scroll to the left
			<IconArrowLeft
				size={64}
				stroke="1.5" />
		</div>

		{#each images as { image, name, description }, i}
			<div class="text-accent -ml-10 flex self-start text-4xl text-white opacity-20">
				0{i + 1}.
			</div>
			<img
				src={image}
				alt={description}
				class="z-10 mr-20 h-full" />
		{/each}
	</div>
</div>
