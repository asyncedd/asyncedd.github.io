<script>
	import { onMount } from 'svelte';

	const particleCount = 10;
	let particles = [];
	const interactionDistance = 10; // Adjust this value to control the interaction range

	function createParticle() {
		const particleSize = Math.random() * 10 + 5; // Random size between 5 and 15
		return {
			x: Math.random() * (window.innerWidth - particleSize),
			y: Math.random() * (window.innerHeight - particleSize),
			size: particleSize,
			speedX: Math.random() * 2 - 1, // Random horizontal speed between -1 and 1
			speedY: Math.random() * 2 - 1, // Random vertical speed between -1 and 1
			color: getRandomColor(), // Random color
			scale: 1
		};
	}

	function getRandomColor() {
		let mocha = [
			'#f5e0dc',
			'#f2cdcd',
			'#f5c2e7',
			'#cba6f7',
			'#f38ba8',
			'#eba0ac',
			'#fab387',
			'#f9e2af',
			'#a6e3a1',
			'#94e2d5',
			'#89dceb',
			'#74c7ec',
			'#89b4fa',
			'#b4befe'
		];
		let randomIndex = Math.floor(Math.random() * mocha.length);
		return mocha[randomIndex];
	}

	function boundValue(value, min, max) {
		return Math.max(min, Math.min(max, value));
	}

	function initParticles() {
		for (let i = 0; i < particleCount; i++) {
			particles.push(createParticle());
		}
	}

	function updateParticles() {
		const { innerWidth, innerHeight } = window;

		particles.forEach((particle, index) => {
			const newSize = particle.size * particle.scale;
			const newX = boundValue(particle.x + particle.speedX, 0, innerWidth - newSize);
			const newY = boundValue(particle.y + particle.speedY, 0, innerHeight - newSize);

			// Check for collisions with the screen edges
			if (newX === 0 || newX === innerWidth - newSize) {
				particles[index].speedX *= -1; // Reverse horizontal direction
			}

			if (newY === 0 || newY === innerHeight - newSize) {
				particles[index].speedY *= -1; // Reverse vertical direction
			}

			// Check for interactions with other particles
			for (let i = 0; i < particles.length; i++) {
				if (i !== index) {
					const otherParticle = particles[i];
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < interactionDistance) {
						// Apply attraction force to bring particles closer together
						const angle = Math.atan2(dy, dx);
						const force = (interactionDistance - distance) / interactionDistance;
						const forceX = force * Math.cos(angle);
						const forceY = force * Math.sin(angle);

						particles[index].speedX -= forceX;
						particles[index].speedY -= forceY;
					}
				}
			}

			particles[index] = {
				...particle,
				x: newX,
				y: newY
			};
		});
	}

	onMount(() => {
		initParticles();

		// Update particle positions every 16ms (approximately 60 FPS)
		setInterval(updateParticles, 16);
	});
</script>

{#each particles as particle}
	<div
		class="particle"
		style="
			width: {particle.size}px;
			height: {particle.size}px;
			left: {particle.x}px;
			top: {particle.y}px;
			background-color: {particle.color};
			border-radius: {particle.size / 2}px;
		"
	/>
{/each}

<style>
	.particle {
		position: absolute;
		z-index: 99999;
		animation: pulseAnimation 1s ease-in-out infinite alternate;
	}

	@keyframes pulseAnimation {
		from {
			transform: scale(0.9);
		}
		to {
			transform: scale(1.1);
		}
	}
</style>
