<script lang="ts">
	import Preview from '$lib/components/organisms/Preview.svelte'
</script>

<section class="relative flex min-h-screen flex-col items-center">
	<div class="main-container">
		<div class="flex justify-center xl:justify-start">
			<h1 class="display-text text-left md:-ml-20 xl:-ml-32 2xl:-ml-40 dark:text-white">
				I create<br />
				generat<span
					class="text-stroke font-normal italic
              ">&#123;if&#125;</span
				><br />
				<span class="font-normal italic">art</span>
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
