<script lang="ts">
	import Burger from '$lib/components/Burger.svelte';
	import Logo from '$lib/assets/logo.svg';
	import routes from '$lib/NavRoutes';
	let opened = false;
	export let segment: string;
</script>

<div class="py-3 px-3 max-w-screen-3xl mx-auto flex flex-row justify-between">
    <a href="/">
        <img src={Logo} alt="logo" class="w-8 h-8" />
    </a>
    <Burger bind:open={opened} />
</div>