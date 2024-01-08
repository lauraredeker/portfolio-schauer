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

	<div class="hidden" class:block={isOpened}>
		{#each routes as route}
			<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
				>{route.label}</a
			>
		{/each}
	</div>
</nav>
