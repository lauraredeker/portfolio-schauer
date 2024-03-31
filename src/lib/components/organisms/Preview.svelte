<script lang="ts">
	import { scrollTo } from 'svelte-scrolling'
	import { onMount } from 'svelte'
	import PreviewGlitch from '$lib/assets/images/preview/preview_glitch.png'
	import PreviewFlowers from '$lib/assets/images/preview/preview_flowers.png'
	import PreviewMeridian from '$lib/assets/images/preview/preview_meridian.png'
	import PreviewNoiseShapes from '$lib/assets/images/preview/preview_noise.png'
	import { IconArrowDown, IconCornerLeftDown } from '@tabler/icons-svelte'
	import ImageLoader from '../atoms/Image/ImageLoader.svelte'

	// Define a type for the previews to make the code more robust and easier to understand
	type Preview = {
		name: string
		id: string
		image: string
	}
	let previews: Preview[] = [
		{ name: 'NOISE SHAPES', id: 'noise-shapes', image: PreviewNoiseShapes },
		{ name: 'GLITCH PAINTINGS', id: 'glitch-paintings', image: PreviewGlitch },
		{ name: 'MERIDIAN', id: 'meridian', image: PreviewMeridian },
		{ name: 'FLOWERS', id: 'flowers', image: PreviewFlowers }
	]
	let currentIndex: number = 0
	let showArrow: boolean = false

	/**
	 * Update the preview image every intervalMs milliseconds
	 * @param intervalMs
	 */
	const updatePreviewAnimation = (intervalMs: number = 7000) => {
		setInterval(() => {
			// Use modulo operator to cycle currentIndex between 0 and previews.length - 1
			currentIndex = (currentIndex + 1) % previews.length
		}, intervalMs)
	}

	// Use a more descriptive name for the event parameter
	const updatePreview = (event: MouseEvent, index: number): void => {
		currentIndex = index
		showArrow = true
	}

	onMount(() => {
		updatePreviewAnimation()
	})
</script>

<section class="absolute inset-x-4 bottom-6">
	<div
		class="flex grow flex-col-reverse justify-stretch gap-20 overflow-hidden md:flex-row md:items-end md:space-x-0">
		<div class="absolute bottom-28 w-full md:relative md:bottom-0 md:left-0 md:w-auto md:flex-none">
			<button
				use:scrollTo={{ ref: 'noise-shapes', offset: 0 }}
				class="button accent block w-full md:bottom-0 md:w-auto"
				>come see my work
				<IconArrowDown class="ml-2 inline-block animate-bounce" />
			</button>
		</div>

		<div class="flex grow justify-end">
			<div class="flex w-full flex-col items-end justify-end space-x-4">
				{#each previews as { name, id }, i}
					<button
						on:mouseover={(e) => updatePreview(e, i)}
						on:focus={(e) => (showArrow = true)}
						on:mouseleave={(e) => (showArrow = false)}
						use:scrollTo={{ ref: id, offset: -80 }}
						class={`${currentIndex === i ? 'underline' : ''}
                             hidden flex-nowrap py-1 uppercase leading-normal tracking-wide underline-offset-4 hover:underline md:flex md:text-l 
                        `}>
						<IconCornerLeftDown
							class={`${showArrow && currentIndex === i ? 'opacity-100' : ''}
                            mt-1 inline-block opacity-0 transition-opacity
                        `} />
						{name}
					</button>
				{/each}
				{#each previews as { name, image }, i}
					{#if currentIndex === i}
						<div
							role="presentation"
							class={`${currentIndex === i ? 'opacity-100' : ''}
                              -z-20 mt-4 w-full opacity-0 transition-opacity duration-300 md:flex md:w-auto md:justify-end
                        `}>
							<ImageLoader
								class="h-24 object-cover"
								src={image}
								alt={name}></ImageLoader>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
