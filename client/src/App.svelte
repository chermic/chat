<script lang="ts">
  import { onMount } from 'svelte';
  import Chat from './modules/chat/Chat.svelte';

  import { WS } from './websocket';

  let messages: string[] = [];

  onMount(() => {
    const ws = WS.getInstance();
    ws.on('message', (message: string) => {
      messages.push(message);
      messages = messages;
    });
  });
</script>

<main>
  <Chat {messages} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
