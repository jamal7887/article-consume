<script>
	export let data;
	const { profile_picture, name, verified } = data;
</script>

<div class="flex items-center gap-2">
	<div class="w-7 rounded-md overflow-hidden">
		<img src={profile_picture} alt="" class="w-full h-full" />
	</div>
	<div class="flex gap-2 items-center">
		{#if verified}
			<span class="material-symbols-outlined !text-md text-brand">verified</span>
		{/if}
		<p class="text-sm">{name}</p>
	</div>
</div>
