<script lang="ts">
	import { type Fields } from '../types';
	export let handleSubmit: (event: any) => Promise<void>;
	export let title: string;
	export let fields: Fields;
	import Input from './input.svelte';

	let loading: boolean = false;
</script>

<div class="px-4 pt-10 md:px-6 lg:px-8 flex justify-center">
	<form
		class="max-w-xl w-full p-6 bg-white rounded-md border-[1.5px] flex flex-col gap-6"
		method="post"
		action="../api/articles"
		on:submit|preventDefault={handleSubmit}
	>
		<h1 class="font-semibold text-lg capitalize">{title}</h1>
		<slot />
		<button
			class={`w-full bg-brand rounded-md p-4 text-white font-semibold'
    `}
			type="submit"
		>
			{#if !loading}Submit{:else}<span class="material-symbols-outlined animate-spin">
					cached
				</span>{/if}
		</button>
	</form>
</div>
