<script lang="ts">
	import Card from './card.svelte';
	export let data: any;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
	{#each data as card}
		<Card {card} />
	{/each}
</div>
