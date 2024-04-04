<script lang="ts">
	import { onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'

	export let containerClasses: string = ''
	export let once: boolean = false
	export let top: number = 0
	export let bottom: number = 0
	export let left: number = 0
	export let right: number = 0

	let isIntersecting = false
	let container: HTMLElement

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`

			// Create an IntersectionObserver
			const observer = new IntersectionObserver(
				(entries) => {
					isIntersecting = entries[0].isIntersecting
					if (isIntersecting && once) {
						observer.unobserve(container)
					}
				},
				{
					rootMargin
				}
			)

			observer.observe(container)
			return () => observer.unobserve(container)
		}

		// The following is a fallback for older browsers
		function handler() {
			const bcr = container.getBoundingClientRect()

			isIntersecting =
				bcr.bottom + bottom > 0 &&
				bcr.right + right > 0 &&
				bcr.top - top < window.innerHeight &&
				bcr.left - left < window.innerWidth

			if (isIntersecting && once) {
				window.removeEventListener('scroll', handler)
			}
		}

		window.addEventListener('scroll', handler)
		return () => window.removeEventListener('scroll', handler)
	})
</script>

<div
	bind:this={container}
	class={twMerge(
		'flex h-full flex-none items-center bg-black bg-opacity-30 object-contain',
		containerClasses
	)}>
	<slot {isIntersecting} />
</div>
