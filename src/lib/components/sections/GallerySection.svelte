<script lang="ts">
	import Gallery from '$lib/components/organisms/Gallery.svelte'
	import { scrollRef } from 'svelte-scrolling'

	import glitch1 from '$lib/assets/images/glitch/glitch1.png'
	import glitch2 from '$lib/assets/images/glitch/glitch2.png'
	import glitch3 from '$lib/assets/images/glitch/glitch3.png'
	import glitch4 from '$lib/assets/images/glitch/glitch4.png'
	import glitch5 from '$lib/assets/images/glitch/glitch5.png'
	import glitch6 from '$lib/assets/images/glitch/glitch6.png'
	import glitch7 from '$lib/assets/images/glitch/glitch7.png'
	import glitch8 from '$lib/assets/images/glitch/glitch8.png'
	import glitch9 from '$lib/assets/images/glitch/glitch9.png'
	import glitch10 from '$lib/assets/images/glitch/glitch10.png'
	import glitch11 from '$lib/assets/images/glitch/glitch11.png'
	import glitch12 from '$lib/assets/images/glitch/glitch12.png'

	import meridian1 from '$lib/assets/images/meridian/meridian1.png'
	import meridian2 from '$lib/assets/images/meridian/meridian2.png'
	import meridian3 from '$lib/assets/images/meridian/meridian3.png'
	import meridian4 from '$lib/assets/images/meridian/meridian4.png'
	import meridian5 from '$lib/assets/images/meridian/meridian5.png'
	import meridian6 from '$lib/assets/images/meridian/meridian6.png'
	import meridian7 from '$lib/assets/images/meridian/meridian7.png'
	import meridian8 from '$lib/assets/images/meridian/meridian8.png'
	import meridian9 from '$lib/assets/images/meridian/meridian9.png'
	import meridian10 from '$lib/assets/images/meridian/meridian10.png'
	import meridian11 from '$lib/assets/images/meridian/meridian11.png'
	import meridian12 from '$lib/assets/images/meridian/meridian12.png'
	import meridian13 from '$lib/assets/images/meridian/meridian13.png'

	import flower2 from '$lib/assets/images/flowers/flower2.png'
	import flower3 from '$lib/assets/images/flowers/flower3.png'
	import flower4 from '$lib/assets/images/flowers/flower4.png'
	import flower5 from '$lib/assets/images/flowers/flower5.png'
	import flower6 from '$lib/assets/images/flowers/flower6.png'
	import flower7 from '$lib/assets/images/flowers/flower7.png'
	import flower8 from '$lib/assets/images/flowers/flower8.png'
	import flower9 from '$lib/assets/images/flowers/flower9.png'
	import flower10 from '$lib/assets/images/flowers/flower10.png'
	import flower11 from '$lib/assets/images/flowers/flower11.png'
	import flower12 from '$lib/assets/images/flowers/flower12.png'
	import flower13 from '$lib/assets/images/flowers/flower13.png'
	import flower14 from '$lib/assets/images/flowers/flower14.png'

	import noise1 from '$lib/assets/images/noise-shapes/noise-shapes-01.png'
	import noise3 from '$lib/assets/images/noise-shapes/noise-shapes-03.png'
	import noise4 from '$lib/assets/images/noise-shapes/noise-shapes-04.png'
	import noise5 from '$lib/assets/images/noise-shapes/noise-shapes-05.png'
	import noise7 from '$lib/assets/images/noise-shapes/noise-shapes-07.png'
	import noise8 from '$lib/assets/images/noise-shapes/noise-shapes-08.png'
	import noise9 from '$lib/assets/images/noise-shapes/noise-shapes-09.png'

	const noiseImages = [
		{ name: '01', description: '', image: noise1 },
		{ name: '02', description: '', image: noise3 },
		{ name: '03', description: '', image: noise4 },
		{ name: '04', description: '', image: noise5 },
		{ name: '05', description: '', image: noise7 },
		{ name: '06', description: '', image: noise8 },
		{ name: '07', description: '', image: noise9 }
	]

	const glitchImages = [
		{ name: '01', description: '', image: glitch1 },
		{ name: '02', description: '', image: glitch2 },
		{ name: '03', description: '', image: glitch3 },
		{ name: '04', description: '', image: glitch4 },
		{ name: '05', description: '', image: glitch5 },
		{ name: '06', description: '', image: glitch6 },
		{ name: '07', description: '', image: glitch7 },
		{ name: '08', description: '', image: glitch8 },
		{ name: '09', description: '', image: glitch9 },
		{ name: '10', description: '', image: glitch10 },
		{ name: '11', description: '', image: glitch11 },
		{ name: '12', description: '', image: glitch12 }
	]

	const meridianImages = [
		{ name: '01', description: '', image: meridian1 },
		{ name: '02', description: '', image: meridian2 },
		{ name: '03', description: '', image: meridian3 },
		{ name: '04', description: '', image: meridian4 },
		{ name: '05', description: '', image: meridian5 },
		{ name: '06', description: '', image: meridian6 },
		{ name: '07', description: '', image: meridian7 },
		{ name: '08', description: '', image: meridian8 },
		{ name: '09', description: '', image: meridian9 },
		{ name: '10', description: '', image: meridian10 },
		{ name: '11', description: '', image: meridian11 },
		{ name: '12', description: '', image: meridian12 },
		{ name: '13', description: '', image: meridian13 }
	]

	const flowerImages = [
		{ name: '02', description: '', image: flower2 },
		{ name: '03', description: '', image: flower3 },
		{ name: '04', description: '', image: flower4 },
		{ name: '05', description: '', image: flower5 },
		{ name: '06', description: '', image: flower6 },
		{ name: '07', description: '', image: flower7 },
		{ name: '08', description: '', image: flower8 },
		{ name: '09', description: '', image: flower9 },
		{ name: '10', description: '', image: flower10 },
		{ name: '11', description: '', image: flower11 },
		{ name: '12', description: '', image: flower12 },
		{ name: '13', description: '', image: flower13 },
		{ name: '14', description: '', image: flower14 }
	]
</script>

<section
	class="noise-bg -white min-h-screen bg-black pb-20 text-white dark:bg-gray-900"
	use:scrollRef={'noise-shapes'}>
	<Gallery
		images={noiseImages}
		seriesNumber="01"
		title="Noise Shapes" />
</section>
<section
	class="noise-bg min-h-screen bg-primary-400 pb-20 dark:bg-primary-800 dark:text-white"
	use:scrollRef={'glitch-paintings'}>
	<Gallery
		images={glitchImages}
		seriesNumber="02"
		title="Glitch Paintings" />
</section>
<section
	class="noise-bg -white min-h-screen bg-black pb-20 dark:bg-black dark:text-white"
	use:scrollRef={'meridian'}>
	<Gallery
		images={meridianImages}
		seriesNumber="03"
		title="Meridian" />
</section>
<section
	class="noise-bg dark:-white min-h-screen bg-teal-700 pb-20 dark:bg-teal-950"
	use:scrollRef={'flowers'}>
	<Gallery
		images={flowerImages}
		seriesNumber="04"
		title="Flowers" />
</section>
