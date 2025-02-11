<script lang="ts">
	import { page } from '$app/state';
	let { data } = $props();

	console.log('/ Page Data: ', page.data.user);
	console.log('/ Prop Data: ', data.user);
</script>

<h1>Home</h1>

{#if data.user}
	<h2>Welcome!</h2>
	<p>Logged in as {data.user.name}</p>
	<p>Role: {data.user.role}</p>

	<p>There should be a session cookie set.</p>
	<p>data.user should be set</p>
{:else}
	<h2>Not logged in</h2>
	<p>you are not currently logged in</p>
	<p>The should not be a session cookie set</p>
	<p>data.user should not be null</p>
{/if}

<h2>This project is to test an issue when using Page data.</h2>
<p>
	When the state of a user changes from logged in to logged out and vice versa and the user leaves
	the site domain the old state is shown when they return
</p>

<h3>Example Scenario</h3>
<p>
	The user logs in, then navigates away from the site, clicks a bookmark to another site or uses
	browser navigation to go back to a previous site. If the user returns to the site using browser
	navigation the user should be logged in but the old state is used showing them logged out until a
	refresh is done.
</p>

<h3>Steps to reproduce the issue:</h3>
<ol>
	<li>Open a new tab and go to localhost:5173</li>
	<li>Open devtools to view the current page.data and data.user</li>
	<li>Go to the Login page and complete Login, credentials don't matter in this example.</li>
	<li>
		Navigate within the site, you can navigate between / and /admin using nav or browser nav, the
		console log shows the user object
	</li>
	<li>
		Use a browser bookmark to a different site or use the browser navigation to go back to the new
		tab page.
	</li>
	<li>
		Use browser navigation to return to the Svelte site. In the console Page data and data.user are
		now null. The navbar shows Login but navigation doesn't work. The session cookie is still
		present.
	</li>
	<li>F5 is needed to refetch the layout data from the server</li>
</ol>

<h3>Solutions</h3>
<p>
	I believe this is an issue with the client being cached. My expectation was having use:enhance on
	login and logout forms would invalidate the load data in the layout.server page. It does this when
	navigating within the site after logged in state changes but leaving and returning seems to fetch
	a cache.
</p>

<p>
	When the Steps to reproduce the issue are done with disable cache enabled in the dev tools this
	issue doesn't persist.
</p>

<p>If Cache-Control: no-store is set in the server hooks the issue doesn't persist.</p>

<p>
	If using window.reload() to redirect on login and logout instead of use:enhance this issue doesn't
	persist
</p>

<h3>Conclusion</h3>
<p>
	I don't know if this is a misunderstanding on my part of how to use load data or a potential bug.
	Should I be trying to catch the user leaving the site and save state? Should logged in state be
	stored in an alternative method?
</p>
