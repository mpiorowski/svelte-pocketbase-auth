<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>

<pre>
    {JSON.stringify(data, null, 4)}
</pre>

<form action="?/logout" method="post" use:enhance>
    <button type="submit">Logout</button>
</form>
