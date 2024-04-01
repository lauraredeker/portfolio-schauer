<script lang="ts">
	import { IconBrandInstagram } from '@tabler/icons-svelte'
	import { Instagram } from '$lib/Constants'

	export let segment: string
</script>

<footer
	class="flex w-full flex-col-reverse items-end justify-between bg-black px-5 pb-5 pt-10 text-xs uppercase text-white md:flex-row md:pt-24 md:text-base">
	<div class="my-5 text-center md:my-0 md:text-left xl:ml-4">
		&copy; {new Date().getFullYear()} Michael Schauer. <br />
		Design & Development by
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
			class={`link mr-4 inline-block  ${
				segment === '/privacy-policy' ? 'underline underline-offset-4' : ''
			}`}
			rel="noopener noreferrer"
			target="_blank"
			href={Instagram}>
			<IconBrandInstagram
				class="size-5 hover:stroke-primary-900"
				stroke="2" />
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
