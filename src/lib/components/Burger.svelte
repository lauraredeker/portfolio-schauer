<script lang="ts">
	let isOpen = false
</script>

<button
	aria-label="menu-button"
	class:isOpen
	class="flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-sm border-none text-white focus:outline-none focus-visible:border-2 focus-visible:border-purple-400"
	on:click={() => (isOpen = !isOpen)}
>
	<div class="block h-auto w-8 -translate-x-1/2 -translate-y-1/2 transform">
		<span
			aria-hidden="true"
			class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
			class:rotate-45={isOpen}
			class:-translate-y-1.5={!isOpen}
		>
		</span>
		<span
			aria-hidden="true"
			class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
			class:opacity-0={isOpen}
		></span>
		<span
			aria-hidden="true"
			class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
			class:-rotate-45={isOpen}
			class:translate-y-1.5={!isOpen}
		></span>
	</div>
	<span class="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
	<span class="-m-1 block text-xxs font-semibold">Menu</span>
</button>
