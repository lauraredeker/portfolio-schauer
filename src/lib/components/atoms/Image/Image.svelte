<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import { onMount } from 'svelte'

	export let src: string | undefined = undefined
	export let alt: string | undefined = undefined

	let isLoaded: boolean = false
	let thisImage: HTMLImageElement
	export let className = ''

	onMount(() => {
		thisImage.onload = () => {
			isLoaded = true
		}
	})
</script>

<img
	{src}
	{alt}
	class={twMerge(
		'relative z-10 h-full flex-none object-contain opacity-0 transition-opacity duration-[5600ms]',
		className
	)}
	loading="lazy"
	class:opacity-100={isLoaded}
	bind:this={thisImage} />
