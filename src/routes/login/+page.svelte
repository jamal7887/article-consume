<script lang="ts">
	import Form from '../../components/form.svelte';
	import Input from '../../components/input.svelte';
	import { goto } from '$app/navigation';
	import { z } from 'zod';
	import InputError from '../../components/inputError.svelte';
	import { type Fields } from '../../types';
	export let data;

	let errors: any;
	const fields: Fields = [{ name: 'name' }];

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const loginSchema = z.object({
		email: z
			.string({ required_error: 'Email is required' })
			.min(4, { message: 'Invalid email' })
			.max(64, { message: 'Invalid email' })
			.email(),
		password: z
			.string({ required_error: 'Invalid Password' })
			.min(6, { message: 'Invalid Password' })
			.max(64, { message: 'Invalid Password' })
			.trim()
	});

	const handleSubmit = async (event: any) => {
		const data = Object.fromEntries(new FormData(event.target));
		const { email, password } = data;
		try {
			const result = loginSchema.parse(data);
			errors = null;
		} catch (err: any) {
			errors = err.flatten().fieldErrors;
		}
		if (errors) return;
		const { error, data: as } = await supabase.auth.signInWithPassword({
			email: email as string,
			password: password as string
		});
		await goto('/');
	};
</script>

<Form {handleSubmit} title={'Login'} {fields}>
	<!-- <div>
		<Input name="email" />
		{#if errors?.email}
			<InputError>
				{errors.email[0]}
			</InputError>
		{/if}
	</div>
	<div>
		<Input name="password" inputType="password" />
		{#if errors?.email}
			<InputError>
				{errors.password[0]}
			</InputError>
		{/if}
	</div> -->
	<a href="" class="text-brand">Forgot password?</a>
</Form>
