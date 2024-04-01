<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	export let src: string | undefined = undefined
	export let alt: string | undefined = undefined

	import { onMount } from 'svelte'

	let loaded: boolean = false
	let thisImage: HTMLImageElement
	export let className = ''

	onMount(() => {
		thisImage.onload = () => {
			loaded = true
		}
	})
</script>

<img
	{src}
	{alt}
	class={twMerge(
		'relative z-10 h-full flex-none object-contain opacity-0 transition-opacity duration-[2600ms]',
		className
	)}
	class:opacity-100={loaded}
	bind:this={thisImage} />
