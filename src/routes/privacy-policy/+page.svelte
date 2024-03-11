<script>
	import { Email, Title } from '$lib/Constants'
</script>

<svelte:head>
	<title>{Title} - Privacy Policy</title>
</svelte:head>

<div class="container mx-auto w-full max-w-screen-xl px-5 py-20 md:px-10">
	<h1>Privacy Policy</h1>
	<section class="mt-10">
		<h2>Contact</h2>
		<h3>Contact</h3>
		<h4>Contact</h4>
		<p>
			If you have any questions about this Privacy Policy, You can contact me by
			<a
				class="link"
				href={`mailto:${Email}`}
			>
				{Email}
			</a>
		</p>
	</section>
</div>

<style>
</style>
