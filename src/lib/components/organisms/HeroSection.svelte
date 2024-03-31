<script lang="ts">
	import Preview from '$lib/components/organisms/Preview.svelte'

	import { onMount } from 'svelte'
	import gsap from 'gsap'

	let visible = false

	function tweenMe(node: HTMLElement) {
		let tl = gsap.timeline()
		const duration = 1

		tl.from(node, {
			duration,
			opacity: 0
		}).from(
			node,
			{
				duration,
				xPercent: 100,
				rotation: -120,
				yPercent: 100,
				ease: 'bounce.out'
			},
			`-=${duration * 0.75}`
		)

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: tl.totalDuration() * 1000,
			tick: (t: number) => {
				tl.progress(t)
			}
		}
	}

	onMount(() => {
		setTimeout(() => {
			visible = true
		}, 700)
	})
</script>

<section class="relative flex min-h-screen flex-col items-center">
	<div class="main-container">
		<div class="flex justify-center px-10 xl:justify-start">
			<h1 class="display-text select-none text-left md:-ml-20 xl:-ml-32 2xl:-ml-40 dark:text-white">
				I create<br />
				generat<span
					class="text-stroke font-normal italic
              ">&#123;if&#125;</span>

				{#if visible}
					<div
						class="mr-24 block text-right tracking-wide"
						transition:tweenMe>
						<span class="text-accent inline-block font-normal md:px-5"> art〜 </span>
					</div>
				{/if}
			</h1>
		</div>
	</div>
	<Preview />

	<div class="fixed -z-40 h-full w-full mix-blend-darken">
		<div class="bg-rotate"></div>
	</div>

	<!--<h2 class="ml-20 mt-80 text-pretty leading-10">
                {data.content?.data?.description || 'Description'}
            </h2>
		-->
</section>

<style lang="postcss">
	.bg-rotate {
		@apply aspect-square w-full animate-spin bg-no-repeat opacity-60 mix-blend-darken;
		background-image: url('$lib/assets/images/geometric-bg.png');
		background-size: 150%;
		background-position: -10rem center;
		animation: spin 500s linear infinite;

		@media (min-width: 768px) {
			background-size: 80%;
			background-position: -10rem 6rem;
		}
	}
</style>
