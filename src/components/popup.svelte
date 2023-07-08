<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  let showPopup: number = 0;
  let y: number = 20;
  let showedPopup: boolean = false;
  let scrolledPopup: boolean = false;

  function updateY(): void {
    if (y > 20) {
      y -= 10;
    } else {
      y += 10;
    }
  }

  function handleScroll(): void {
    const threshold: number = 100; // Adjust this value as needed
    if (!(window.scrollY > threshold) && !showedPopup) {
      y = 20;
      showPopup = 1;
      showedPopup = true;
    } else {
      y = 0;
      showPopup = 0;
      showedPopup = true;
    }
  }

  function scrollDown(): void {
    if (scrolledPopup !== true) {
      scrolledPopup = true;
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      });
    }
  }

  async function initializePopupCode() {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    updateY();
    const interval = setInterval(updateY, 1000); // Update y every 1 second

    afterUpdate(() => {
      if (!showedPopup) {
        clearInterval(interval);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }

  onMount(initializePopupCode)
</script>

<div class="popup" style="opacity: {showPopup}; bottom: {y}px;" on:click={scrollDown}>
  <span class="material-symbols-outlined">arrow_circle_down</span>
</div>

<style>
  .popup {
    position: fixed;
    bottom: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 45px;
    padding: 10px;
    @apply text-ctp-base bg-ctp-sky text-center;
    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px rgba(137, 220, 235, 0.5);
    z-index: 9999;
    transition: opacity 0.5s ease-out, bottom 0.5s ease-in, width 0.5s ease-in, padding 0.5s ease-in; /* Added transition property */
  }

  .popup:hover {
    width: 100px;
    padding: 30px;
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 45;
  }
</style>
