<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import React from 'react';
  import ReactDOM from 'react-dom/client'; // Updated import for createRoot
  import {YouTubeWrapper} from "../YoutubeWrapper";
  
</script>
<h1>Welcome to SvelteKit</h1>
<react:YouTubeWrapper />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
