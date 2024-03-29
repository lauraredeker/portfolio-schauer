<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Burger from '$lib/components/atoms/Burger.svelte'
	import routes from '$lib/NavRoutes'
	import { isDarkMode } from '$lib/store'
	import { IconMoon, IconSun } from '@tabler/icons-svelte'

	let isOpened = false
	export let segment: string

	function toggleDarkMode() {
		isDarkMode.update((value) => !value)
		if ($isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	$: mobileMenuClasses = `fixed top-0 left-0 right-0 h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-black bg-opacity-70 backdrop-blur-lg transition-all duration-700
		${isOpened ? 'opacity-100 z-40 display-block' : 'hidden'}`
</script>

<nav
	class="max-w-screen-3xl fixed left-0 right-0 top-0 z-40 w-full px-4 md:bg-transparent dark:text-white">
	<div class="z-50 flex w-full flex-row items-center justify-between pt-3">
		<div class="inline-flex items-center justify-start">
			<Logo />
		</div>
		<div class="flex flex-row">
			<button
				class="focus-visible mr-6 hidden w-auto items-center justify-center md:flex"
				on:click={toggleDarkMode}>
				{#if $isDarkMode}
					<IconSun
						class="dark:hover-text-primary-300 size-5 hover:text-primary-700 focus-visible:outline-none"
						stroke="1.5" />
				{:else}
					<IconMoon
						class="dark:hover-text-primary-300 size-5 hover:text-primary-700 focus-visible:outline-none"
						stroke="1.5" />
				{/if}
			</button>

			<div
				class="hidden items-center justify-end md:flex"
				class:text-white={$isDarkMode}>
				{#each routes as route}
					{#if route.label !== 'Imprint' && route.label !== 'Privacy Policy'}
						<a
							class={`
								${segment === route.href ? 'underline' : ''}
								focus-visible ml-5 inline-block text-l uppercase tracking-wider underline-offset-4 transition ease-in-out hover:text-primary-600
					 		`}
							aria-current={segment === route.href}
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
					class={`text-accent block py-2 text-3xl font-bold transition ease-in-out hover:scale-125 hover:text-primary-400 md:py-6 md:text-5xl
					 ${segment === route.href ? 'text-primary-400 underline underline-offset-8' : ''}`}
					aria-current={segment === route.href}
					on:click={() => (isOpened = false)}
					href={route.href}>{route.label}</a>
			{/if}
		{/each}
	</div>
</nav>
