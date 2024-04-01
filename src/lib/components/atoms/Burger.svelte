<script lang="ts">
	// isOpen is a prop that can be passed into the Burger component from a parent component. It's defined as a boolean.
	export let isOpen: boolean
</script>

<button
	aria-label="menu-button"
	class:isOpen
	class="relative z-50 my-3 flex h-8 w-8 cursor-pointer flex-col items-center justify-center border-none text-center hover:text-primary-800 focus:outline-none focus-visible:border-2 focus-visible:border-primary-800 active:text-primary-800 md:hidden dark:hover:text-primary-300"
	on:click={() => (isOpen = !isOpen)}>
	<span
		aria-hidden="true"
		class="absolute block h-[2px] w-8 transform bg-black transition duration-500 ease-in-out dark:bg-white"
		class:rotate-45={isOpen}
		class:-translate-y-2={!isOpen}>
	</span>
	<span
		aria-hidden="true"
		class="absolute block h-[2px] w-8 transform bg-black transition duration-500 ease-in-out dark:bg-white"
		class:-rotate-45={isOpen}
		class:translate-y-2={!isOpen}></span>
	<span class="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
	<span class="block text-xs uppercase">{isOpen ? '' : 'Menu'}</span>
</button>
