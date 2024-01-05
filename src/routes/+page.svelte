<script lang="ts">
	import Counter from "$lib/components/Counter.svelte";
</script>

<svelte:head>
	<title>Michael Schauer - Hello!</title>
</svelte:head>

<main class="w-full h-screen text-white">
    <section class="flex items-center justify-center w-full h-full">
        <div class="text-center">
            <h1 class="text-8xl font-bold">Hi, I am Bebi.</h1>
            <Counter />
        </div>
    </section>
</main>
