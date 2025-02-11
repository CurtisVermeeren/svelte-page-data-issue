<script lang="ts">
	import { page } from '$app/state';
	let { data } = $props();

	console.log('Admin Page Data: ', page.data.user);
	console.log('Admin Prop Data: ', data.user);
</script>

<h1>Admin</h1>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
	<p>Role: {data.user.role}</p>
{/if}
