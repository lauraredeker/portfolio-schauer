<script lang="ts">
	import { PUBLIC_API_KEY } from '$env/static/public'
	import { isPreviewing, Content } from '@builder.io/sdk-svelte'
	import { Title } from '$lib/Constants.js'

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
			<h1 class="display-text left-20 top-24 z-20 text-left dark:text-white">
				I create<br />
				generat<span
					class="bg-black font-normal italic text-white
			  ">&#123;if&#125;</span
				><br />
				<span class="font-normal italic">art</span>
			</h1>
		</div>

		<!--<h2 class="ml-20 mt-80 text-pretty leading-10">
					{data.content?.data?.description || 'Description'}
				</h2>-->
		<img
			class="fixed -top-40 left-20 h-[160%] opacity-60 mix-blend-darken dark:mix-blend-difference"
			src={design1} />
	</section>

	<div class="grid grid-cols-3 overflow-x-scroll">
		<div>
			<img
				src={design1}
				class="w-full rotate-90" />
		</div>

		<div>
			<img
				src={design1}
				class="w-full rotate-90" />
		</div>

		<div>
			<img
				src={design1}
				class="w-full rotate-90" />
		</div>
	</div>
</main>
