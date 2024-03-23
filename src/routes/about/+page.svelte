<script>
	import { FullName, Title, PhotoWebsite, Instagram } from '$lib/Constants'
</script>

<svelte:head>
	<title>{Title} - About</title>
</svelte:head>

<div class="main-container">
	<h1>about</h1>
	<section class="mt-10">
		<h3 class="my-5">
			Hi, my name is <span class="">{FullName}</span>. I create generative art.
		</h3>
		<div>
			<img
				src="https://via.placeholder.com/200x280"
				class="float-left mb-10 mr-10 w-1/3"
				alt="Portrait of Michael Schauer" />
			<p>
				adjective iron pupil couple package dangerous foreign to noise saddle source actually hair
				guess dead funny courage quietly environment through scientist count negative egg.<br />
			</p>
			<p>
				brown perfectly band pile movement facing official element not forget daily had forward army
				event drove further represent entire model must single guard garage. eye involved step took
				conversation straw thou character cup ourselves needed fallen wild organized fought
				scientist morning wolf agree orbit aid old spider cowboy down travel ruler create chart
				needs principle fact pony load fly give cannot while pilot pound coat research fog dozen
				running stepped comfortable authorbring son another wise deer lovely mixture having burn
				balloon positive discovery belt hand fall shorter knew telephone structure upper by your
				position traffic<br /><br />
			</p>
		</div>

		<h4 class="mt-20">I also take pictures</h4>

		<a
			class="button mt-4 inline-block"
			rel="noopener noreferrer"
			target="_blank"
			href={PhotoWebsite}>
			michaelschauer.com
		</a>
		<a
			class="button ml-4 mt-4 inline-block"
			rel="noopener noreferrer"
			target="_blank"
			href={Instagram}>
			instagram/michaelschauerphoto
		</a>
	</section>
</div>

<style>
</style>
