<script lang="ts">
	export let isOpen: boolean // <--- added above the reactive assignment
	isOpen = false // <-- `show` now has type `boolean`
</script>

<button
	aria-label="menu-button"
	class:isOpen
	class="z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-sm border-none p-2 text-center text-white focus:outline-none focus-visible:border-2 focus-visible:border-primary-400 active:text-primary-300"
	on:click={() => (isOpen = !isOpen)}
>
	<div class="absolute right-10 block -translate-y-1 transform">
		<span
			aria-hidden="true"
			class="absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out"
			class:rotate-45={isOpen}
			class:-translate-y-2={!isOpen}
		>
		</span>
		<span
			aria-hidden="true"
			class="absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out"
			class:opacity-0={isOpen}
		></span>
		<span
			aria-hidden="true"
			class="absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out"
			class:-rotate-45={isOpen}
			class:translate-y-2={!isOpen}
		></span>
	</div>
	<span class="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
</button>
