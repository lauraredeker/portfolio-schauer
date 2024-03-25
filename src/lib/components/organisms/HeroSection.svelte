<script lang="ts">
	import design1 from '$lib/assets/images/noise-shapes/noise-shapes-01.png'

	import Preview from '$lib/components/organisms/Preview.svelte'
</script>

<section class="relative flex min-h-screen flex-col items-center">
	<div class="main-container">
		<div class="flex items-center justify-center">
			<h1 class="display-text text-left leading-[0.9] md:-ml-44 dark:text-white">
				I create<br />
				generat<span
					class="bg-black font-normal italic text-white
              ">&#123;if&#125;</span
				><br />
				<span class="font-normal italic">art</span>
			</h1>
		</div>
	</div>
	<Preview />

	<!--<h2 class="ml-20 mt-80 text-pretty leading-10">
                {data.content?.data?.description || 'Description'}
            </h2>
	<img
		class="fixed -top-40 left-20 -z-40 aspect-auto opacity-60 mix-blend-darken md:h-[160%] dark:mix-blend-difference"
		src={design1} />
		-->
</section>
