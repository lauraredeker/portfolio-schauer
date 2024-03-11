<script lang="ts">
	export let segment: string
</script>

<footer
	class="flex w-full flex-col-reverse justify-between text-center indent-4 text-xs md:flex-row md:py-5 xl:text-base"
>
	<div class="my-5 md:my-0">
		&copy; {new Date().getFullYear()} Michael Schauer. Design & Development by
		<a
			class="link"
			href="https://www.lauraredeker.com"
			rel="noopener noreferrer"
			target="_blank"
			>Laura A. Redeker
		</a>
	</div>
	<div class="md:text-right">
		<a
			class={`link mr-4 ${
				segment === '/privacy-policy' ? 'text-primary-200 underline underline-offset-4' : ''
			}`}
			href="/privacy-policy"
			>Privacy Policy
		</a>
		<a
			class={`link mr-4 ${
				segment === '/imprint' ? 'text-primary-200 underline underline-offset-4' : ''
			}`}
			href="/imprint"
			>Imprint
		</a>
	</div>
</footer>
