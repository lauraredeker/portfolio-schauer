<script lang="ts">
	import { IconBrandInstagram } from '@tabler/icons-svelte'
	import { Instagram } from '$lib/Constants'

	export let segment: string
</script>

<footer
	class="flex w-full flex-col-reverse items-center justify-between text-center indent-4 text-xs md:flex-row md:py-5 md:text-base">
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
	<div class="flex flex-row items-center md:text-right">
		<a
			class={`link mr-4 inline-block ${
				segment === '/privacy-policy' ? 'underline underline-offset-4' : ''
			}`}
			rel="noopener noreferrer"
			target="_blank"
			href={Instagram}>
			<IconBrandInstagram
				class="size-5 hover:stroke-primary-900"
				strokeWidth="2" />
		</a>
		<a
			class={`link mr-4 ${segment === '/privacy-policy' ? 'underline underline-offset-4' : ''}`}
			href="/privacy-policy"
			>Privacy Policy
		</a>
		<a
			class={`link mr-4 ${segment === '/imprint' ? 'underline underline-offset-4' : ''}`}
			href="/imprint"
			>Imprint
		</a>
	</div>
</footer>
