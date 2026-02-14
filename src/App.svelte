<script>
  import { onMount } from 'svelte';
  import NeuralScene from './components/NeuralScene.svelte';
  import CorrespondenceDashboard from './components/CorrespondenceDashboard.svelte';
  import PullVisualizer from './components/PullVisualizer.svelte';
  
  let currentScene = 'network';
  let data = null;
  let loaded = false;
  
  onMount(async () => {
    const res = await fetch(import.meta.env.BASE_URL + 'data/correspondence_data.json');
    data = await res.json();
    loaded = true;
  });
  
  function navigate(scene) {
    currentScene = scene;
  }
</script>

<main>
  {#if !loaded}
    <div class="loading">
      <div class="enso">&#9711;</div>
      <p>entering the mind...</p>
    </div>
  {:else}
    <nav>
      <button class:active={currentScene === 'network'} on:click={() => navigate('network')}>
        The Network
      </button>
      <button class:active={currentScene === 'correspondence'} on:click={() => navigate('correspondence')}>
        Correspondence
      </button>
      <button class:active={currentScene === 'pull'} on:click={() => navigate('pull')}>
        The Pull
      </button>
    </nav>
    
    <div class="scene-container">
      {#if currentScene === 'network'}
        <NeuralScene {data} />
      {:else if currentScene === 'correspondence'}
        <CorrespondenceDashboard {data} />
      {:else if currentScene === 'pull'}
        <PullVisualizer {data} />
      {/if}
    </div>
    
    <div class="attribution">
      <p>The Pull Methodology — Zachary Pedram Dadfar</p>
    </div>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: #0a0a0f;
    color: #e0e0e8;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
  }
  
  :global(*) {
    box-sizing: border-box;
  }
  
  main {
    width: 100vw;
    min-height: 100vh;
    position: relative;
  }
  
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
  }
  
  .enso {
    font-size: 4rem;
    opacity: 0.6;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .loading p {
    font-size: 0.9rem;
    opacity: 0.4;
    letter-spacing: 0.2em;
    text-transform: lowercase;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
  
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    background: linear-gradient(to bottom, rgba(3, 3, 8, 0.9) 0%, rgba(3, 3, 8, 0.4) 70%, transparent 100%);
    pointer-events: none;
  }
  
  nav button {
    pointer-events: auto;
    background: rgba(3, 3, 8, 0.5);
    border: 1px solid rgba(180, 170, 220, 0.12);
    color: rgba(180, 170, 220, 0.4);
    padding: 0.4rem 1.2rem;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
  }
  
  nav button:hover {
    border-color: rgba(180, 170, 220, 0.3);
    color: rgba(200, 190, 240, 0.7);
  }
  
  nav button.active {
    border-color: rgba(140, 120, 255, 0.5);
    color: rgba(200, 190, 240, 0.85);
    background: rgba(140, 120, 255, 0.08);
    box-shadow: 0 0 15px rgba(140, 120, 255, 0.06);
  }
  
  .scene-container {
    width: 100%;
    min-height: 100vh;
    padding-top: 0;
  }
  
  .attribution {
    position: fixed;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    pointer-events: none;
  }
  
  .attribution p {
    font-size: 0.6rem;
    color: rgba(180, 170, 220, 0.18);
    letter-spacing: 0.15em;
    margin: 0;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    nav {
      gap: 0.5rem;
      padding: 0.75rem 0.5rem;
    }
    nav button {
      padding: 0.35rem 0.65rem;
      font-size: 0.6rem;
      letter-spacing: 0.08em;
    }
    .attribution {
      bottom: 0.4rem;
    }
    .attribution p {
      font-size: 0.5rem;
      letter-spacing: 0.08em;
    }
  }
  
  @media (max-width: 400px) {
    nav {
      gap: 0.25rem;
    }
    nav button {
      padding: 0.3rem 0.5rem;
      font-size: 0.55rem;
    }
  }
</style>
