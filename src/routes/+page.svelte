<script lang="ts">
	import { PUBLIC_API_KEY } from '$env/static/public'
	import { isPreviewing, Content } from '@builder.io/sdk-svelte'
	import { Title } from '$lib/Constants.js'
	import Button from '$lib/components/Button.svelte'

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
	<section>
		<h1 class="fixed left-20 top-24 z-20 text-left dark:text-white">
			{data.content?.data?.title || 'Hi there'}
		</h1>

		<div class="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				<h2 class="ml-20 mt-80 text-pretty leading-10">
					{data.content?.data?.description || 'Description'}
				</h2>
			</div>
			<div>
				<div
					class="inline-flex h-[1249px] w-[999px] origin-top-left rotate-90 flex-col items-center justify-center bg-white mix-blend-darken">
					<div
						class="inline-flex h-[1249px] w-[999px] flex-col items-center justify-center mix-blend-darken">
						<img
							class="h-full mix-blend-darken dark:mix-blend-difference"
							src={design1} />
					</div>
				</div>
			</div>
		</div>

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
	</section>
</main>
