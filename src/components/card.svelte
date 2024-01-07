<script>
	export let card;
	import Profile from './profile.svelte';
	const { title, image, authors } = card;
</script>

<div class="flex flex-col gap-6">
	<div class="relative w-full pb-[60%]">
		<img src={image} alt="" class="absolute h-full w-full object-cover object-center rounded-md" />
	</div>
	<div class="flex flex-col gap-2">
		<Profile data={authors} />
		<h1 class="font-semibold text-xl line-clamp-2">
			{title}
		</h1>
	</div>
</div>
