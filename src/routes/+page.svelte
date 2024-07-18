<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import React from 'react';
  import ReactDOM from 'react-dom/client'; // Updated import for createRoot
  import {YouTubeWrapper} from "../YoutubeWrapper";

  let root: ReactDOM.Root;

  let youtubeReactComponent: ReactDOM.Container; 


  const renderNotifiCardModal = (youtubeReactComponent: ReactDOM.Container) => {
    root = ReactDOM.createRoot(youtubeReactComponent)
    root.render(React.createElement(YouTubeWrapper, {}, null))
  }

  onMount(() => {
    renderNotifiCardModal(youtubeReactComponent )
  });

  onDestroy(() => {
    if (root) {
      root.unmount(); // Use the unmount method on the root
    }
  });

</script>
<h1>Welcome to SvelteKit</h1>

<div bind:this={youtubeReactComponent}></div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
