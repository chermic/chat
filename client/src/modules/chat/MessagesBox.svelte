<script lang="ts">
  import Message from './Message.svelte';

  export let messages: string[];
</script>

<div>
  {#each messages as message}
    <Message {message} />
  {/each}
</div>
