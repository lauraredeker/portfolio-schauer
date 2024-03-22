<script>
	export let fillColor = '#0F0F0F'
	export let size = 79
	$: newViewBox = `0 0 ${size} ${size}`
</script>

<svg
	width="100%"
	height="100%"
	viewBox={newViewBox}
	class="transition duration-300 ease-in-out hover:-rotate-[160deg] hover:transform hover:stroke-[5px]"
	fill="none"
	xmlns="http://www.w3.org/2000/svg">
	<path
		class="stroke-[3px] transition duration-300 ease-in-out hover:stroke-[5px]"
		d="M4 16.7112C8.33333 11.7112 21.5 5.41119 39.5 20.2112C57.5 35.0112 71 26.3779 75.5 20.2112"
		stroke={fillColor} />
	<path
		class="stroke-[3px] transition duration-300 ease-in-out hover:stroke-[5px]"
		d="M4 36.0942C8.33333 31.0942 21.5 24.7942 39.5 39.5942C57.5 54.3942 71 45.7609 75.5 39.5942"
		stroke={fillColor} />
	<path
		class="stroke-[3px] transition duration-300 ease-in-out hover:stroke-[5px]"
		d="M4 55.4772C8.33333 50.4772 21.5 44.1772 39.5 58.9772C57.5 73.7772 71 65.1439 75.5 58.9772"
		stroke={fillColor} />
</svg>
