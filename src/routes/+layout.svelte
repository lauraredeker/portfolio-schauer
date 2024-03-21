<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { page } from '$app/stores'
	import { isDarkMode, customBackground } from '$lib/store'

	import '../app.pcss'

	interface CSSVariable {
		[name: string]: string
	}

	const applyCSSVariable = (
		node: HTMLElement,
		variables: CSSVariable
	): { update: (variables: CSSVariable) => void } => {
		setCssVariables(node, variables)

		return {
			update(variables: CSSVariable) {
				setCssVariables(node, variables)
			}
		}
	}

	/**
	 * Set CSS variables on a node
	 * @param node
	 * @param variables
	 */
	const setCssVariables = (node: HTMLElement, variables: CSSVariable): void => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name])
		}
	}
</script>

<svelte:body use:applyCSSVariable={{ background: $customBackground }} />

<Navbar segment={$page.url.pathname} />

<main
	class="flex min-h-screen flex-col justify-between"
	class:text-white={$isDarkMode}>
	<slot />

	<Footer segment={$page.url.pathname} />
</main>

<style>
	* {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		font-size: 18px;
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Almarai', sans-serif;
	}

	:global(body) {
		background-color: var(--background);
	}

	:global(::selection) {
		color: white;
		background-color: #5e30f7;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}
</style>
