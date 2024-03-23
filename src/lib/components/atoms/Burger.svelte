<script lang="ts">
	// isOpen is a prop that can be passed into the Burger component from a parent component. It's defined as a boolean.
	export let isOpen: boolean
</script>

<button
	aria-label="menu-button"
	class:isOpen
	class="relative z-50 flex h-8 w-8 cursor-pointer flex-col items-center justify-center border-none text-center hover:border-primary-400 focus:outline-none focus-visible:border-2 focus-visible:border-primary-400 active:text-primary-300 md:hidden"
	on:click={() => (isOpen = !isOpen)}>
	<span
		aria-hidden="true"
		class="absolute block h-0.5 w-8 transform bg-current transition duration-500 ease-in-out"
		class:rotate-45={isOpen}
		class:-translate-y-2={!isOpen}>
	</span>
	<span
		aria-hidden="true"
		class="absolute block h-0.5 w-8 transform bg-current transition duration-500 ease-in-out"
		class:opacity-0={isOpen}></span>
	<span
		aria-hidden="true"
		class="absolute block h-0.5 w-8 transform bg-current transition duration-500 ease-in-out"
		class:-rotate-45={isOpen}
		class:translate-y-2={!isOpen}></span>
	<span class="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
</button>
