<script lang="ts">
	export let name: string;
	export let type: 'input' | 'textarea' = 'input';
	export let inputType: 'text' | 'file' | 'email' | 'password' = 'text';
</script>

<div>
	<label class="capitalize" for={name}>{name}</label>
	<svelte:element
		this={type}
		type={inputType}
		{name}
		class={`w-full p-3 rounded-md mt-2 border-[1.5px] ${type == 'textarea' ? 'h-28' : ''}`}
	/>
</div>
