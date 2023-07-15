<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { theme } from '../components/navbar.svelte';

	let showPopup = 0;
	let showedPopup = false;
	let scrolledPopup = false;
	let showPointer = 'inherit';

	function handleScroll(): void {
		const threshold = 100;
		if (!(window.scrollY > threshold) && !showedPopup) {
			showPopup = 1;
			showedPopup = true;
			showPointer = 'inherit';
		} else {
			showPopup = 0;
			showedPopup = true;
			scrolledPopup = true;
			showPointer = 'none';
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

		await tick();

		if (!showedPopup) {
			const popup = document.querySelector('.popup');
			if (popup) {
				popup.classList.add('animate');
			}
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}

	onMount(initializePopupCode);
</script>

<div
	class="popup {$theme}"
	role="button"
	style="opacity: {showPopup}; pointer-events: {showPointer};"
	on:click={scrollDown}
	on:keydown={scrollDown}
	tabindex="0"
>
	<span class="material-symbols-outlined">arrow_circle_down</span>
</div>

<style>
	.popup {
		@apply fixed bottom-[20px] ml-[50%] w-[45px] rounded-[4px] bg-ctp-blue p-[10px] text-center;
		box-shadow: 0px 4px 4px 0px rgba(137, 180, 250, 0.5);
		transition: opacity 0.5s ease-out, bottom 0.5s ease-in, width 0.5s ease-in, padding 0.5s ease-in; /* Added transition property */
		z-index: 9999;
		animation: bounce 1s infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-25%) translateX(-50%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: translateY(0) translateX(-50%);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}

	.popup:hover {
		@apply w-[100px] p-[30px];
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 45;
	}
</style>
