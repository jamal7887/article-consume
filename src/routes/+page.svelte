<script lang="ts">
	import Cardlist from '../components/cardlist.svelte';
	import { onMount } from 'svelte';
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	import { readable } from 'svelte/store';

	const val: any = [];

	let articles: any;
	$: articles = readable(val, (set) => {
		supabase
			.from('articles')
			.select(
				`*, authors (
				*
			)`
			)
			.then(({ data }) => {
				set(data);
			});
	});

	onMount(async () => {});
</script>

<div class="px-4 pt-10 md:px-6 lg:px-8">
	<h1 class="text-lg font-semibold pb-5">Featured articles</h1>
	{#if $articles.length}
		<Cardlist data={$articles} />
	{/if}
</div>
