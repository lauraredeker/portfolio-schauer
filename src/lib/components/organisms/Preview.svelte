<script lang="ts">
	import { scrollTo } from 'svelte-scrolling'
	import { onMount } from 'svelte'
	import PreviewGlitch from '$lib/assets/images/preview/preview_glitch.png'
	import PreviewFlowers from '$lib/assets/images/preview/preview_flowers.png'
	import PreviewMeridian from '$lib/assets/images/preview/preview_meridian.png'
	import PreviewNoiseShapes from '$lib/assets/images/preview/preview_noise.png'
	import { IconArrowDown, IconPointFilled } from '@tabler/icons-svelte'
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

<section
	class="absolute inset-x-4 bottom-6 flex-col gap-12 md:flex md:flex-row md:items-end md:justify-between 2xl:gap-x-48">
	<button
		use:scrollTo={{ ref: 'noise-shapes', offset: 0 }}
		class="button bottom-5 block w-full shrink px-4 md:bottom-0 md:w-auto xl:px-8 2xl:px-16"
		>come see my work
		<IconArrowDown class="ml-2 inline-block animate-bounce" />
	</button>

	<div
		class="hidden shrink-0 flex-col-reverse justify-between border-b-[1px] border-black border-opacity-30 md:flex md:flex-row md:items-end md:space-x-20 dark:border-white dark:border-opacity-30">
		<div class="flex w-full flex-col justify-between">
			{#each previews as { name, image }, i}
				{#if currentIndex === i}
					<div
						role="presentation"
						class={`${currentIndex === i ? 'opacity-100' : ''}
								-z-20 mb-4 w-full opacity-0 transition-opacity duration-300 md:flex md:w-auto md:justify-end
							`}>
						<ImageLoader
							class="max-w-[600px] object-cover md:min-w-52"
							src={image}
							alt={name}></ImageLoader>
					</div>
				{/if}
			{/each}

			<div class="flex w-full flex-row items-end justify-end">
				{#each previews as { name, id }, i}
					<button
						on:mouseover={(e) => updatePreview(e, i)}
						on:focus={(e) => (showArrow = true)}
						on:mouseleave={(e) => (showArrow = false)}
						use:scrollTo={{ ref: id, offset: -80 }}
						class={`
						${currentIndex === i ? '-is-active font-semibold text-primary-700 dark:text-primary-400' : ''} 
						${i !== previews.length - 1 ? '' : ''}
						 magic-border relative hidden px-2 py-2 font-bold uppercase  leading-normal tracking-wide hover:text-primary-700 md:flex md:items-center md:justify-start md:text-base 2xl:px-5 dark:hover:text-primary-400 
					`}>
						<IconPointFilled
							class={`${
								currentIndex === i ? 'text-primary-700 opacity-100 dark:text-primary-400' : ''
							}
						mr-1 inline-block size-6 opacity-0 transition-all
					`} />
						{name}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
