<!-- <script lang="ts">
	import { goto } from '$app/navigation';
	import { z } from 'zod';
	import { redirect } from '@sveltejs/kit';
	import InputError from '../../components/inputError.svelte';
	import Form from '../../components/form.svelte';
	import Input from '../../components/input.svelte';
	import createUser from '../../helpers/createUser';
	let errors: any = null;

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let valid: boolean;

	$: {
		valid = !errors;
		console.log(valid);
	}
	const registerSchema = z.object({
		email: z
			.string({ required_error: 'Email is required' })
			.min(4, { message: 'Email must have more than 3 characters' })
			.max(64, { message: "Email can't be longer than 64 characters" })
			.email(),
		name: z
			.string({ required_error: 'Name is required' })
			.min(4, { message: 'Name must have more than 3 characters' })
			.max(64, { message: "Name can't be longer than 64 characters" })
			.trim(),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be atleast 6 charactes long' })
			.max(64, { message: 'password cannot be longer than 64 characters' })
			.trim(),
		'password confirm': z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be atleast 6 charactes long' })
			.max(64, { message: 'password cannot be longer than 64 characters' })
			.trim()
	});

	const handleSubmit = async (event: any) => {
		const data = Object.fromEntries(new FormData(event.target));
		const { name, email, password, 'profile picture': profilePicture } = data;
		try {
			const result = registerSchema.parse(data);
			errors = null;
		} catch (err: any) {
			errors = err.flatten().fieldErrors;
		}
		if (errors) return;

		await createUser(
			{
				name: name as string,
				email: email as string,
				password: password as string,
				profilePicture: profilePicture
			},
			supabase
		);

		await goto('/');
	};
</script>

<Form {handleSubmit} title={'Register'} {valid}>
	<div>
		<Input name="name" />
		{#if errors?.name}
			<InputError>
				{errors.name[0]}
			</InputError>
		{/if}
	</div>
	<div>
		<Input name="email" inputType="email" />
		{#if errors?.email}
			<InputError>
				{errors.email[0]}
			</InputError>
		{/if}
	</div>
	<div class="grid grid-cols-2 gap-5">
		<div class="">
			<Input name="password" inputType="password" />
			{#if errors?.password}
				<InputError>
					{errors.password[0]}
				</InputError>
			{/if}
		</div>

		<div>
			<Input name="password confirm" inputType={'password'} />
			{#if errors?.['password confirm']}
				<InputError>
					{errors?.['password confirm'][0]}
				</InputError>
			{/if}
		</div>
	</div>

	<Input name="profile picture" inputType="file" />
</Form> -->
