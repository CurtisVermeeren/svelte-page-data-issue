<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	let { data, form } = $props();

	console.log('Login Page Data: ', page.data.user);
	console.log('Login Prop Data: ', data.user);
</script>

<h1>Login</h1>

<p>This login returns a mock test user. Input doesn't matter</p>

<form action="?/login" method="POST" use:enhance>
	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" />
	</div>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<button type="submit">Log in</button>
</form>
