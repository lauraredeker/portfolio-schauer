<script>
	export let isOpen = false;
</script>

<button
	aria-label="menu-button"
	class="text-white flex flex-col items-center justify-center rounded-sm cursor-pointer border-none focus-visible:border-2 focus-visible:border-purple-400 focus:outline-none"
	class:isOpen
	on:click={() => (isOpen = !isOpen)}
>
	<svg width="28" height="20" class="block min-h-8 stroke-2 transition-transform">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
	<span class="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
	<span class="font-semibold text-xxs -m-1">Menu</span>
</button>

<style>
	svg line {
		stroke: currentColor;
		transition: transform 0.3s ease-in-out;
	}

	.isOpen #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.isOpen #middle {
		stroke-dasharray: 0;
		stroke-dashoffset: 0;
		animation: fade 1s ease-in alternate forwards;
	}

	.isOpen #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}

	@keyframes fade {
		to {
			stroke-dashoffset: 1000;
			stroke-dasharray: 1000;
		}
	}

</style>
