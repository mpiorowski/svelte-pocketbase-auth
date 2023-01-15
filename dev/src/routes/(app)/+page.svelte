<script lang="ts">
    import { countStore } from "src/store";
    import type { PageData } from "./$types";

    export let data: PageData;

    let number = 0;

    let array = [1, 2, 3, 4, 5];

    $: arrayCount = array.length;
    $: countStore.set(arrayCount);

</script>

<h2>Home</h2>

<pre>{JSON.stringify(data, undefined, 2)}</pre>

{number}
<button on:click={() => number++}>Increment</button>

<p>
    {array}
</p>
<button on:click={() => (array = array.concat(array.length + 1))}>Push</button>
{arrayCount}
