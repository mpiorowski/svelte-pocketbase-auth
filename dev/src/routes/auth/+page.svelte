<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h2>Login</h2>
<form action="?/login" method="post" use:enhance>
    <label for="email">Email</label>
    <input name="email" id="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <button type="submit">Login</button>
</form>
