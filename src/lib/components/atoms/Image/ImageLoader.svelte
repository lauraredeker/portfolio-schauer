<script lang="ts">
	export let src: string | undefined = undefined
	export let alt: string | undefined = undefined
	import { onMount } from 'svelte'

	import IntersectionObserver from './IntersectionObserver.svelte'
	import Image from './Image.svelte'

	let nativeLoading: boolean = false

	let className = ''
	export { className as class }

	// Determine whether to bypass our intersecting check
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true
		}
	})
</script>

<IntersectionObserver
	once={true}
	let:intersecting>
	{#if intersecting || nativeLoading}
		<Image
			{className}
			{src}
			{alt} />
	{/if}
</IntersectionObserver>
