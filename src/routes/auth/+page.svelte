<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<h1>Auth</h1>

<form action="?/login" method="post" use:enhance>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
</form>

<form action="?/register" method="post">
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Register</button>
</form>
