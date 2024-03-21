<script lang="ts">
	import Burger from '$lib/components/Burger.svelte'
	import Logo from '$lib/assets/logo-waves.svg'
	import routes from '$lib/NavRoutes'
	import { LightBackground, DarkBackground, FullName } from '$lib/Constants'
	import { customBackground } from '$lib/store'
	import { IconMoon, IconSun, IconBrandDeno } from '@tabler/icons-svelte'

	let isOpened = false
	export let segment: string
	export let linklist: any = []

	$: isDark = false
	$: mobileMenuClasses = `fixed top-0 h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg transition-all duration-700
		${isOpened ? 'opacity-100 z-40 display-block' : 'hidden'}`
</script>

<nav class="max-w-screen-3xl fixed top-0 z-40 mx-auto w-full indent-0">
	<div class="absolute z-50 flex w-full flex-row items-center justify-between px-2 py-3 pr-4">
		<div class="inline-flex w-[300px] items-center justify-start">
			<a
				href="/"
				class="flex flex-row items-center">
				<img
					src={Logo}
					alt="Logo"
					class="mr-4 h-8 w-8" />

				<span class="mr-1 block uppercase leading-5 tracking-wide">
					{FullName}
					<span class="block font-bold">Gen.Art</span>
				</span>
			</a>
		</div>
		<div class="flex flex-row">
			<button
				class="mr-6 flex w-auto items-center justify-center"
				on:click={() => {
					isDark ? customBackground.set(LightBackground) : customBackground.set(DarkBackground)
					isDark = !isDark
				}}>
				{#if isDark}
					<IconSun
						class="size-5 hover:text-primary-700 "
						strokeWidth="1.5" />
				{:else}
					<IconMoon
						class="size-5 hover:text-primary-700 "
						strokeWidth="1.5" />
				{/if}
			</button>

			<div class="hidden items-center justify-end md:flex">
				{#each routes as route}
					{#if route.label !== 'Imprint' && route.label !== 'Privacy Policy'}
						<a
							class={`inline-block px-2 uppercase tracking-wider underline-offset-4 transition  ease-in-out hover:underline
					 ${segment === route.href ? 'underline' : ''}`}
							aria-current={segment === route.href}
							on:click={() => (isOpened = false)}
							href={route.href}>{route.label}</a>
					{/if}
				{/each}
			</div>

			<Burger bind:isOpen={isOpened} />
		</div>
	</div>

	<div class={mobileMenuClasses}>
		{#each routes as route}
			{#if route.label !== 'Imprint' && route.label !== 'Privacy Policy'}
				<a
					class={`block py-2 text-3xl font-bold transition ease-in-out hover:scale-125 hover:text-primary-400 md:py-6 md:text-5xl
					 ${segment === route.href ? 'text-primary-400 underline underline-offset-8' : ''}`}
					aria-current={segment === route.href}
					on:click={() => (isOpened = false)}
					href={route.href}>{route.label}</a>
			{/if}
		{/each}
	</div>
</nav>
