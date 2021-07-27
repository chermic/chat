<script lang="ts">
  import { WS } from '../../websocket';

  let message = '';

  const onKeyDown = (ev: KeyboardEvent): void => {
    if (ev.key !== 'Enter') {
      return;
    }

    const ws = WS.getInstance().sendMessage(message);
    message = '';
  };
</script>

<div>
  <input bind:value={message} on:keydown={onKeyDown} />
</div>
