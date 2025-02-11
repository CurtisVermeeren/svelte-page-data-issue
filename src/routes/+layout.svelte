<script lang="ts">
	import { enhance } from '$app/forms';
	import '../styles/app.css';
	let { data, children } = $props();
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<nav>
	{#if data.user}
		<a href="/">Home</a>
		<a href="/admin">Admin</a>
		<form class="logout" action="/auth/logout?/logout" method="POST" use:enhance>
			<button type="submit">Log out</button>
		</form>
	{:else}
		<a href="/">Home</a>
		<a href="/auth/login">Login</a>
		<a href="/auth/register">Register</a>
	{/if}
</nav>

<main>
	{@render children()}
</main>
