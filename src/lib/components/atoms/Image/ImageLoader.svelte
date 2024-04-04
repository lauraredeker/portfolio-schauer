<script lang="ts">
	import { onMount } from 'svelte'
	import IntersectionObserver from './IntersectionObserver.svelte'
	import Image from './Image.svelte'

	export let src: string | undefined = undefined
	export let alt: string | undefined = undefined

	let hasNativeLoading: boolean = false

	export let containerClasses: string = ''
	let className = ''
	export { className as class }

	// Determine whether to bypass our intersecting check
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			hasNativeLoading = true
		}
	})
</script>

<IntersectionObserver
	{containerClasses}
	once={true}
	let:isIntersecting>
	{#if isIntersecting || hasNativeLoading}
		<Image
			{className}
			{src}
			{alt} />
	{/if}
</IntersectionObserver>
