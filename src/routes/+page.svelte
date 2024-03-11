<script lang="ts">
	import { PUBLIC_API_KEY } from '$env/static/public'
	import { isPreviewing, Content } from '@builder.io/sdk-svelte'
	import { Title } from '$lib/Constants.js'
	import Button from '$lib/components/Button.svelte'

	import BackgroundImage5 from '$lib/assets/design5.png'
	import BackgroundImage4 from '$lib/assets/design4.png'
	import BackgroundImage3 from '$lib/assets/design3.png'
	import BackgroundImage2 from '$lib/assets/design2.png'
	import BackgroundImage1 from '$lib/assets/design1.png'

	const CUSTOM_COMPONENTS = [
		{
			component: Button,
			name: 'Hello World',
			inputs: [
				{
					name: 'text',
					type: 'string',
					defaultValue: 'World'
				}
			]
		}
	]

	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data

	// we want to show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing()
</script>

<svelte:head>
	<title>{Title} - {data.content?.data?.title || 'Hi there'}</title>
</svelte:head>

<main class="min-h-screen w-full overflow-x-hidden text-white">
	<section>
		<h1 class="fixed left-20 top-24 z-0 text-left">
			{data.content?.data?.title || 'Hi there'}
		</h1>

		<div class="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				<h2 class="ml-20 mt-80 text-pretty leading-10">
					{data.content?.data?.description || 'Description'}
				</h2>
			</div>
			<div>
				{#if canShowContent}
					<div>
						<Content
							model="page"
							content={data.content}
							apiKey={PUBLIC_API_KEY}
							customComponents={CUSTOM_COMPONENTS}
						/>
					</div>
				{:else}
					<div>
						<img
							src={BackgroundImage5}
							alt="logo"
							class="w-full"
						/>
					</div>
					<div>
						<img
							src={BackgroundImage4}
							alt="logo"
							class="w-full rotate-90"
						/>
					</div>
				{/if}
			</div>
		</div>

		<div class="grid grid-cols-3">
			<div>
				<img
					src={BackgroundImage1}
					alt="logo"
					class="w-full rotate-90"
				/>
			</div>

			<div>
				<img
					src={BackgroundImage2}
					alt="logo"
					class="w-full rotate-90"
				/>
			</div>

			<div>
				<img
					src={BackgroundImage3}
					alt="logo"
					class="w-full rotate-90"
				/>
			</div>
		</div>
	</section>
</main>
