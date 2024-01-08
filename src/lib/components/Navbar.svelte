<script lang="ts">
	import Burger from '$lib/components/Burger.svelte'
	import Logo from '$lib/assets/logo.svg'
	import routes from '$lib/NavRoutes'

	let isOpened = false
	export let segment: string
</script>

<nav class="max-w-screen-3xl mx-auto flex flex-row justify-between px-3 py-3">
	<a href="/">
		<img src={Logo} alt="logo" class="h-8 w-8" />
	</a>
	<Burger bind:isOpen={isOpened} />

	<div
		class="fixed left-0 top-0 h-screen w-screen flex-col items-center justify-center bg-black"
		class:hidden={!isOpened}
		class:flex={isOpened}
	>
		{#each routes as route}
			<a
				class={`block py-2 text-3xl hover:text-primary-400 md:py-6 md:text-6xl ${
					segment === route.href ? 'text-primary-400 underline underline-offset-8' : ''
				}`}
				on:click={() => (isOpened = false)}
				href={route.href}>{route.label}</a
			>
		{/each}
	</div>
</nav>
