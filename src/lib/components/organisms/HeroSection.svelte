<script lang="ts">
	import bg from '$lib/assets/images/geometric-bg.png'

	import Preview from '$lib/components/organisms/Preview.svelte'
</script>

<section class="relative flex min-h-screen flex-col items-center">
	<div class="main-container">
		<div class="flex justify-center xl:justify-start">
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

	<div class="fixed -z-40 h-full w-full mix-blend-darken">
		<div class="bg-rotate"></div>
	</div>

	<!--<h2 class="ml-20 mt-80 text-pretty leading-10">
                {data.content?.data?.description || 'Description'}
            </h2>
		-->
</section>
