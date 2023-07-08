<div class="wave">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      class="shape-fill"
    />
  </svg>
</div>

<style>
  .wave {
    position: absolute;
    top: 29.3rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 157px;
    animation: wave-animation 10s ease-in-out infinite alternate;
  }

  @keyframes wave-animation {
  0% {
    width: calc(100% + 1px);
  }
  100% {
    width: calc(100% + 100px);
  }
  }

  .wave .shape-fill {
    fill: #89b4fa;
  }
</style>
