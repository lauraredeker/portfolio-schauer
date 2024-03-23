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
	class="flex flex-row items-center">
	<div class="mr-4 size-8">
		<LogoIcon onMouseover={isHovering} />
	</div>
	<span
		class="mr-1 block uppercase leading-5 tracking-wide hover:text-primary-900 dark:hover:text-primary-200">
		{FullName}
		<span class="block font-bold">Gen.Art</span>
	</span>
</a>
