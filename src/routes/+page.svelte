<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<pre>
    {JSON.stringify(data, null, 4)}
</pre>

<form action="?/logout" method="post" use:enhance>
    <button type="submit">Logout</button>
</form>
