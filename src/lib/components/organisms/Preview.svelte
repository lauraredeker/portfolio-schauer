<script lang="ts">
	import { scrollTo } from 'svelte-scrolling'
	import { onMount } from 'svelte'
	import PreviewGlitch from '$lib/assets/images/preview/preview_glitch.png'
	import PreviewFlowers from '$lib/assets/images/preview/preview_flowers.png'
	import PreviewMeridian from '$lib/assets/images/preview/preview_meridian.png'
	import PreviewNoiseShapes from '$lib/assets/images/preview/preview_noise.png'
	import { IconArrowDown, IconCornerLeftDown } from '@tabler/icons-svelte'

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
	class="w-full flex-row items-end justify-between md:absolute md:inset-x-0 md:bottom-6 md:flex md:grow-0">
	<div
		class="flex grow flex-col-reverse justify-stretch md:flex-row md:items-end md:space-x-0 md:px-8">
		<div class="w-full md:w-auto md:flex-none">
			<button
				use:scrollTo={{ ref: 'noise-shapes', offset: 0 }}
				class="button accent mb-2 block w-full text-right md:w-auto"
				>come see my work
				<IconArrowDown class="ml-2 inline-block animate-bounce" />
			</button>
		</div>

		<div class="mb-10 grow md:mb-0 md:flex md:grow md:justify-end">
			<div
				class="relative flex w-full flex-wrap space-x-4 space-y-2 md:flex-row md:justify-end xl:space-y-0 2xl:w-full">
				{#each previews as { name, image }, i}
					{#if currentIndex === i}
						<div
							role="presentation"
							class={`${currentIndex === i ? 'opacity-100' : ''}
                              -z-20 mb-4 w-full justify-end opacity-0 transition-opacity duration-300 md:bottom-20 md:left-0 md:right-0 md:flex md:basis-full xl:bottom-6
                        `}>
							<img
								class="h-auto w-full md:max-w-[60%]"
								alt={name}
								src={image} />
						</div>
					{/if}
				{/each}

				{#each previews as { name, id }, i}
					<button
						on:mouseover={(e) => updatePreview(e, i)}
						on:focus={(e) => (showArrow = true)}
						on:mouseleave={(e) => (showArrow = false)}
						use:scrollTo={{ ref: id, offset: -80 }}
						class={`${currentIndex === i ? 'underline' : ''}
                            flex flex-nowrap uppercase leading-normal tracking-wide underline-offset-4 hover:underline 2xl:text-l 
                        `}>
						<IconCornerLeftDown
							class={`${showArrow && currentIndex === i ? 'opacity-100' : ''}
                            mt-1 inline-block opacity-0 transition-opacity
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
