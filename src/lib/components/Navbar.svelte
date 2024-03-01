<script lang="ts">
	import Burger from '$lib/components/Burger.svelte'
	import Logo from '$lib/assets/logo.svg'
	import routes from '$lib/NavRoutes'

	let isOpened = false
	export let segment: string

	$: menuClasses = `
		fixed top-0 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg transition-all duration-700
		${isOpened ? 'left-0 opacity-100' : '-left-[100%] opacity-0'}
	`
</script>

<nav class="max-w-screen-3xl fixed top-0 z-50 mx-auto w-full indent-0">
	<div class="absolute z-50 flex w-full flex-row justify-between px-3 py-3">
		<a href="/">
			<img
				src={Logo}
				alt="logo"
				class="size-8"
			/>
		</a>
		<div>
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
