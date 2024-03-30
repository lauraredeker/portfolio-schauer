<script lang="ts">
	import { IconArrowLeft, IconArrowRight } from '@tabler/icons-svelte'
	import { dragscroll } from '@svelte-put/dragscroll'

	type Image = {
		name: string
		description: string
		image: string
	}
	export let images: Image[]
	export let title: string
	export let seriesNumber: String
	export let isBrightBackground: boolean = false
</script>

<div>
	<div class="relative z-20 flex w-full flex-row items-end justify-between">
		<div
			class="my-10 ml-10 bg-white px-12 pb-6 pt-4 text-black dark:bg-primary-800 dark:text-white">
			<h3 class="font-bold lowercase">series {seriesNumber}</h3>
			<h2 class="text-accent text-nowrap tracking-widest">{title}</h2>
		</div>
	</div>

	<div
		class="relative my-5 flex basis-full items-center overflow-y-hidden overflow-x-scroll px-10 md:my-20 md:h-[90vh] md:px-20 xl:px-56"
		use:dragscroll>
		<div
			class="text-accent text-uppercase z-10 mr-16 flex w-32 flex-col self-start text-pretty text-xl text-white md:mr-24">
			drag / scroll
			<IconArrowLeft
				class="size-10 md:size-20"
				stroke="1.5" />
		</div>

		{#each images as { image, name, description }, i}
			<img
				src={image}
				alt={description}
				class="z-10 mr-5 flex aspect-auto h-full flex-col self-start" />
		{/each}
	</div>
</div>
