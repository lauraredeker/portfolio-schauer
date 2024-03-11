<script lang="ts">
	import Burger from '$lib/components/Burger.svelte'
	import Logo from '$lib/assets/logo.svg'
	import routes from '$lib/NavRoutes'
	import { LightBackground, DarkBackground } from '$lib/Constants'
	import { customBackground } from '$lib/store'
	import { IconMoon, IconSun, IconBrandDeno } from '@tabler/icons-svelte'

	let isOpened = false
	export let segment: string

	$: isDark = true
	$: menuClasses = `fixed top-0 h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg transition-all duration-700
		${isOpened ? 'opacity-100 z-40 display-block' : 'hidden'}`
</script>

<nav class="max-w-screen-3xl fixed top-0 z-40 mx-auto w-full indent-0">
	<div class="absolute z-50 flex w-full flex-row items-center justify-between px-2 py-3 pr-4">
		<a href="/">
			<IconBrandDeno
				strokeWidth="1.5"
				class="size-6 hover:text-primary-200 md:size-7"
			/>
		</a>
		<div class="grid grid-cols-2 gap-x-3">
			<button
				class="flex w-auto items-center justify-center"
				on:click={() => {
					isDark ? customBackground.set(LightBackground) : customBackground.set(DarkBackground)
					isDark = !isDark
				}}
			>
				{#if isDark}
					<IconMoon
						class="size-6 hover:text-primary-200 "
						strokeWidth="1.5"
					/>
				{:else}
					<IconSun
						class="size-6 hover:text-primary-200 "
						strokeWidth="1.5"
					/>
				{/if}
			</button>

			<Burger bind:isOpen={isOpened} />
		</div>
	</div>

	<div class={menuClasses}>
		{#each routes as route}
			{#if route.label !== 'Imprint' && route.label !== 'Privacy Policy'}
				<a
					class={`block py-2 text-3xl font-bold transition ease-in-out hover:scale-125 hover:text-primary-400 md:py-6 md:text-5xl
					 ${segment === route.href ? 'text-primary-400 underline underline-offset-8' : ''}`}
					aria-current={segment === route.href}
					on:click={() => (isOpened = false)}
					href={route.href}>{route.label}</a
				>
			{/if}
		{/each}
	</div>
</nav>
