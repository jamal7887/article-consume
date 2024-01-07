<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import '../app.css';
	import 'material-symbols';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;

	$: ({ session, supabase } = data);
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			try {
				invalidateAll();
			} catch (error) {
				console.log(error);
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</head>

<div class="bg-bg min-h-[100vh] pb-5">
	<div
		class="px-4 md:px-6 lg:px-8 bg-black flex justify-between items-center py-3 text-white font-[roboto] text-sm"
	>
		<a class="text-xl font-bold" href="/">Article.consume</a>
		<div class="flex items-center gap-4">
			<a href="/create-article" class="hover:opacity-70"> Create </a>
			{#if !session?.user?.email}
				<a href="/login" class="hover:opacity-70"> Login </a>
			{/if}
			{#if session?.user?.email}
				<button
					class="p-2 hover:bg-opacity-75"
					on:click={() => {
						supabase.auth.signOut();
					}}>Logout</button
				>
			{/if}
			{#if !session?.user?.email}
				<a href="/register" class="p-2 bg-brand rounded-md hover:bg-opacity-75">Signup</a>
			{/if}
		</div>
	</div>
	<slot />
</div>
