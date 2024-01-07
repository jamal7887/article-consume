<!-- <script lang="ts">
	import Form from '../../components/form.svelte';
	import Input from '../../components/input.svelte';
	import { z } from 'zod';
	import InputError from '../../components/inputError.svelte';
	import createArticle from '../../helpers/createArticle';
	import { goto } from '$app/navigation';
	export let data;

	let errors: any = null;
	let valid: any;

	$: valid = !errors;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const articleSchema = z.object({
		title: z
			.string({ required_error: 'title is required' })
			.min(4, { message: 'The title must be atleast 4 characters long' })
			.max(64, { message: 'The title cannot be longer than 64 characters ' })
			.trim(),
		content: z
			.string({ required_error: 'Content is required' })
			.min(6, { message: 'content must be atleast 6 characters long' })
			.max(64, { message: 'Content is too long' })
			.trim()
	});
	const handleSubmit = async (event: any) => {
		const form = new FormData(event.target);
		const data = Object.fromEntries(form);
		const { title, content, image } = data;
		try {
			articleSchema.parse(data);
			errors = null;
		} catch (err: any) {
			errors = err.flatten().fieldErrors;
		}
		if (errors) return;
		await createArticle(session, supabase, {
			title: title as string,
			content: content as string,
			image: image
		});

		goto('/');
	};
</script>

<Form {handleSubmit} title={'create article'} {valid}>
	<div>
		<Input name="title" />
		{#if errors?.title}
			<InputError>
				{errors.title[0]}
			</InputError>
		{/if}
	</div>
	<div>
		<Input name="content" type="textarea" />
		{#if errors?.content}
			<InputError>
				{errors.content[0]}
			</InputError>
		{/if}
	</div>
	<Input name="image" inputType="file" />
</Form> -->
