<template>
  <svg
    class="confetti-burst"
    viewBox="0 0 340 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Rayos / trazos festivos alrededor del centro -->
    <!-- Izquierda -->
    <path d="M50 40 L70 55" stroke="#F4B323" stroke-width="6" stroke-linecap="round" />
    <path d="M90 25 L102 45" stroke="#B5121B" stroke-width="5" stroke-linecap="round" />
    <path d="M35 75 L60 82" stroke="#B5121B" stroke-width="5.5" stroke-linecap="round" />
    <path d="M25 115 L50 115" stroke="#F4B323" stroke-width="6" stroke-linecap="round" />
    <path d="M45 150 L68 140" stroke="#76151B" stroke-width="5" stroke-linecap="round" />
    <circle cx="85" cy="70" r="4.5" fill="#F4B323" />
    <circle cx="55" cy="100" r="3.5" fill="#B5121B" />
    <circle cx="78" cy="130" r="4" fill="#D94A3D" />

    <!-- Derecha -->
    <path d="M290 40 L270 55" stroke="#F4B323" stroke-width="6" stroke-linecap="round" />
    <path d="M250 25 L238 45" stroke="#B5121B" stroke-width="5" stroke-linecap="round" />
    <path d="M305 75 L280 82" stroke="#B5121B" stroke-width="5.5" stroke-linecap="round" />
    <path d="M315 115 L290 115" stroke="#F4B323" stroke-width="6" stroke-linecap="round" />
    <path d="M295 150 L272 140" stroke="#76151B" stroke-width="5" stroke-linecap="round" />
    <circle cx="255" cy="70" r="4.5" fill="#F4B323" />
    <circle cx="285" cy="100" r="3.5" fill="#B5121B" />
    <circle cx="262" cy="130" r="4" fill="#D94A3D" />

    <!-- Arriba -->
    <path d="M140 18 L145 35" stroke="#F4B323" stroke-width="5" stroke-linecap="round" />
    <path d="M200 18 L195 35" stroke="#B5121B" stroke-width="5" stroke-linecap="round" />
  </svg>
</template>

<style scoped>
.confetti-burst {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 420px;
  height: auto;
  pointer-events: none;
  z-index: 0;
}
</style>
