<script>
	import { FullName, Title, PhotoWebsite, Instagram } from '$lib/Constants'
	import { IconExternalLink } from '@tabler/icons-svelte'
	import Image from '$lib/assets/images/Michael-Schauer.jpg'
</script>

<svelte:head>
	<title>{Title} - About</title>
</svelte:head>

<div class="main-container">
	<h1>about</h1>
	<section class="mt-10">
		<h2 class="my-5 text-pretty">
			Hi, my name is <span class="">{FullName}</span>.
		</h2>
		<div class="grid place-content-center gap-0 md:grid-cols-3">
			<img
				src={Image}
				class="float-left mb-10 mr-10 w-4/5"
				alt="Portrait of Michael Schauer" />
			<div class="col-span-2 text-justify">
				<h4 class="text-accent mb-4">Lorem Ipsum</h4>
				<p>
					adjective iron pupil couple package dangerous foreign to noise saddle source actually hair
					guess dead funny courage quietly environment through scientist count negative egg.<br /><br />
				</p>
				<p>
					Lorem brown perfectly band pile movement facing official element not forget daily had
					forward army event drove further represent entire model must single guard garage. eye
					involved step took conversation straw thou character cup ourselves needed fallen wild
					organized fought scientist morning wolf agree orbit aid old spider cowboy down travel
					ruler create chart needs principle fact pony load fly give cannot while pilot pound coat
					research fog dozen running stepped comfortable authorbring son another wise deer lovely
					mixture having burn balloon positive discovery belt hand fall shorter knew telephone
					structure upper by your position traffic<br /><br />
				</p>
			</div>
		</div>

		<div class="mt-16 grid grid-flow-row-dense gap-4 md:grid-cols-2">
			<div>
				<h4>Follow my work</h4>
				<a
					class="button mt-4 flex items-center"
					rel="noopener noreferrer"
					target="_blank"
					href={Instagram}>
					<IconExternalLink class="mr-2 inline-block size-4 md:size-6" />
					instagram/<wbr />michaelschauerphoto
				</a>
			</div>
			<div>
				<h4>I also take pictures of landscapes</h4>
				<a
					class="button mt-4 flex items-center"
					rel="noopener noreferrer"
					target="_blank"
					href={PhotoWebsite}>
					<IconExternalLink class="mr-2 inline-block size-4 md:size-6" />
					michaelschauer.com
				</a>
			</div>
		</div>
	</section>
</div>

<style>
</style>
