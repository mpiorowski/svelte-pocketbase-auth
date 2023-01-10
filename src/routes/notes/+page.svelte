<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<form action="?/createNote" method="post">
    <input type="text" name="title" placeholder="Title" />
    <textarea name="content" placeholder="Content" />
    <button type="submit">Create</button>
</form>

{#each data.notes as note}
    <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
    </div>
{/each}
