<script lang="ts">
  import Input from './Input.svelte';
  import MessagesBox from './MessagesBox.svelte';

  export let messages: string[];
</script>

<div>
  <MessagesBox {messages} />
  <Input />
</div>
