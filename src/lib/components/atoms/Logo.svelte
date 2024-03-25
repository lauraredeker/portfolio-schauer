<script lang="ts">
	import LogoIcon from '$lib/components/atoms/LogoIcon.svelte'
	import { FullName } from '$lib/Constants'

	let isHovering = false
</script>

<a
	href="/"
	on:mouseover={() => (isHovering = true)}
	on:focus={() => (isHovering = true)}
	on:mouseout={() => (isHovering = false)}
	on:blur={() => (isHovering = false)}
	class="focus-visible flex flex-row items-center">
	<div class="mr-2 size-6 md:mr-4 md:size-8">
		<LogoIcon onMouseover={isHovering} />
	</div>
	<span
		class="mr-1 block text-xs uppercase leading-3 tracking-wide hover:text-primary-900 md:text-sm md:leading-5 dark:hover:text-primary-200">
		{FullName}
		<span class="block font-bold">Gen.Art</span>
	</span>
</a>
