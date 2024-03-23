<script lang="ts">
	import { PUBLIC_API_KEY } from '$env/static/public'
	import { isPreviewing, Content } from '@builder.io/sdk-svelte'
	import { Title } from '$lib/Constants.js'

	import Gallery from '$lib/components/organisms/Gallery.svelte'

	import design1 from '$lib/assets/images/noise-shapes/noise-shapes-01.png'

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data

	// we want to show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing()
</script>

<svelte:head>
	<title>{Title} - {data.content?.data?.title || 'Hi there'}</title>
</svelte:head>

<main class="min-h-screen w-full">
	<section class="flex min-h-screen items-center">
		<div class="main-container">
			<div class="flex items-center justify-center">
				<h1 class="display-text text-left md:-ml-44 dark:text-white">
					I create<br />
					generat<span
						class="bg-black font-normal italic text-white
				  ">&#123;if&#125;</span
					><br />
					<span class="font-normal italic">art</span>
				</h1>
			</div>
		</div>

		<!--<h2 class="ml-20 mt-80 text-pretty leading-10">
					{data.content?.data?.description || 'Description'}
				</h2>-->
		<img
			class="fixed -top-40 left-20 -z-40 aspect-auto opacity-60 mix-blend-darken md:h-[160%] dark:mix-blend-difference"
			src={design1} />
	</section>

	<section class="min-h-screen bg-black py-20 text-white">
		<Gallery />
	</section>
</main>
