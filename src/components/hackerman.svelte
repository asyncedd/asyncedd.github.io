<script lang="ts">
	import { onMount } from 'svelte';

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
	const animationIntervalDuration = 10;

  function hackerMan(): void {
    const h1Elements = Array.from(document.querySelectorAll('h1'));

    for (const h1 of h1Elements) {
      h1.addEventListener('mouseover', handleMouseOver);
    }
  }

  function getRandomLetter(): string {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }

  function handleMouseOver(event) {
    const target = event.target; // No need for type assertion

    if (target.classList.contains('animating')) {
      return; // Exit if already animating
    }

    target.classList.add('animating'); // Add class to indicate animation

    let iteration = 0;
    let interval = undefined;

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      const targetValue = target.dataset.value;
      const currentText = target.innerText;
      const nextText = Array.from(currentText)
      .map((letter, index) => {
        if (iteration === 0) {
          return targetValue[index];
        } else if (index < iteration) {
          return targetValue[index];
        } else if (index === iteration && letter === targetValue[index]) {
          return letter; // Stop generating for this letter
        }

        return getRandomLetter();
      })
      .join('');

      target.innerText = nextText;

      if (iteration >= targetValue.length) {
        clearInterval(interval);
        target.classList.remove('animating'); // Remove class after animation
      } else if (nextText[iteration] === targetValue[iteration]) {
        iteration++; // Move to the next letter
      }
      }, animationIntervalDuration);
  }

	onMount(() => {
		hackerMan();
	});
</script>
