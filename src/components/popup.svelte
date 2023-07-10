<script lang="ts">
import { onMount, tick } from 'svelte';

let showPopup = 0;
let y = 20;
let showedPopup = false;
let scrolledPopup = false;
let showPointer = "inherit";

function updateY(): void {
  y = (y > 20) ? y - 10 : y + 10;
}

function handleScroll(): void {
  const threshold = 100;
  if (!(window.scrollY > threshold) && !showedPopup) {
    y = 20;
    showPopup = 1;
    showedPopup = true;
    showPointer = "inherit";
  } else {
    y = 0;
    showPopup = 0;
    showedPopup = true;
    scrolledPopup = true;
    showPointer = "none";
  }
}

function scrollDown(): void {
  if (!scrolledPopup) {
    scrolledPopup = true;
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    });
  }
}

async function initializePopupCode() {
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  updateY();
  const interval = setInterval(updateY, 1000);

  await tick();

  if (!showedPopup) {
    clearInterval(interval);
  }

  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearInterval(interval);
  };
}

onMount(initializePopupCode);
</script>

<div
	class="popup"
	role="button"
	style="opacity: {showPopup}; bottom: {y}px; pointer-events: {showPointer};"
	on:click={scrollDown}
	on:keydown={scrollDown}
	tabindex="0"
>
	<span class="material-symbols-outlined">arrow_circle_down</span>
</div>

<style>
	.popup {
		transform: translateX(-50%);
		@apply text-ctp-base bg-ctp-sky text-center fixed bottom-[20px] ml-[50%] w-[45px] p-[10px] rounded-[4px];
		box-shadow: 0px 4px 4px 0px rgba(137, 220, 235, 0.5);
		transition: opacity 0.5s ease-out, bottom 0.5s ease-in, width 0.5s ease-in, padding 0.5s ease-in; /* Added transition property */
		z-index: 9999;
	}

	.popup:hover {
		@apply w-[100px] p-[30px];
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 45;
	}
</style>
