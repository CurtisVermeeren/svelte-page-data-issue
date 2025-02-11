<script lang="ts">
	import { page } from '$app/state';
	let { data } = $props();

	console.log('Register Page Data: ', page.data.user);
	console.log('Register Prop Data: ', data.user);
</script>

<h1>Register</h1>

<p>This app is for testing a Page data issue only. The mock db returns a hardcoded test user.</p>
