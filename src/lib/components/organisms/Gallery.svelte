<script lang="ts">
	import { IconArrowLeft, IconArrowRight } from '@tabler/icons-svelte'
	import { dragscroll } from '@svelte-put/dragscroll'
	import ImageLoader from '$lib/components/atoms/Image/ImageLoader.svelte'

	type Image = {
		name: string
		description: string
		image?: string
		video?: string
		poster?: string
	}
	export let images: Image[] = []
	export let title: string
	export let seriesNumber: String
</script>

<div>
	<div
		class="relative flex h-[70vh] overflow-x-scroll px-10 py-16 md:h-screen md:px-20 md:py-20 xl:px-56"
		use:dragscroll>
		<div class="relative z-20 flex w-full basis-full flex-col items-start gap-10 pr-20 md:mr-20">
			<div
				class="aspect-square w-full border-4 border-white px-4 pb-6 pt-4 text-white md:px-12 dark:text-white">
				<h3 class="font-bold lowercase">series {seriesNumber}</h3>
				<h2 class="text-accent uppercase italic leading-none tracking-widest">
					{title}
				</h2>
			</div>

			<div class="z-10 mr-16 flex flex-col self-start text-pretty text-white md:mr-24 md:text-xl">
				drag / scroll left
				<IconArrowLeft
					class="size-10 md:size-20"
					stroke="1.5" />
			</div>
		</div>

		{#each images as { image, video, poster, description }, i}
			{#if image}
				<ImageLoader
					containerClasses="mr-5 md:mr-20"
					src={image}
					alt={description}></ImageLoader>
			{/if}
			{#if video}
				<video
					class="mr-5 md:mr-20"
					autoplay
					muted
					{poster}
					preload="none"
					loop>
					<source
						src={video}
						type="video/mp4" />
				</video>
			{/if}
		{/each}
	</div>
</div>
