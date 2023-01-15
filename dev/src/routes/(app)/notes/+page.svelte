<script lang="ts">
    import { enhance } from "$app/forms";
    import { countStore } from "src/store";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h2>Notes</h2>

<div>
    COUNT: {$countStore}
</div>

<form action="?/createNote" method="post" use:enhance>
    <input name="title" />
    <input name="content" />
    <button type="submit">Create</button>
</form>

{#each data.notes as note}
    <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
    </div>
{/each}
