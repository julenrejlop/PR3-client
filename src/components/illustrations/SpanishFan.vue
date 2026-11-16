<template>
  <svg
    class="spanish-fan"
    viewBox="0 0 240 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="fan-cloth" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E22533" />
        <stop offset="60%" stop-color="#B5121B" />
        <stop offset="100%" stop-color="#76151B" />
      </linearGradient>
      <linearGradient id="rib-wood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A1C12" />
        <stop offset="100%" stop-color="#1F0E08" />
      </linearGradient>
    </defs>

    <!-- Arco de tela del abanico desplegado -->
    <path
      d="M20 180 C20 90, 80 20, 190 20 C210 20, 230 25, 238 32 C236 42, 225 50, 215 54 C130 58, 70 115, 62 180 Z"
      fill="url(#fan-cloth)"
      stroke="#F4B323"
      stroke-width="2"
      filter="drop-shadow(0 8px 20px rgba(118, 21, 27, 0.3))"
    />

    <!-- Lunares negros tradicionales de flamenco sobre el abanico -->
    <g fill="#1F0E08" opacity="0.85">
      <circle cx="65" cy="140" r="5" />
      <circle cx="85" cy="115" r="5" />
      <circle cx="115" cy="95" r="5.5" />
      <circle cx="150" cy="85" r="5.5" />
      <circle cx="185" cy="80" r="5" />

      <circle cx="50" cy="160" r="4.5" />
      <circle cx="70" cy="120" r="5" />
      <circle cx="100" cy="80" r="5.5" />
      <circle cx="135" cy="65" r="6" />
      <circle cx="175" cy="55" r="5.5" />
      <circle cx="205" cy="55" r="4.5" />

      <circle cx="45" cy="135" r="4" />
      <circle cx="65" cy="95" r="4.5" />
      <circle cx="95" cy="60" r="5" />
      <circle cx="130" cy="42" r="5" />
      <circle cx="168" cy="38" r="5" />
    </g>

    <!-- Varillas de madera del abanico -->
    <g stroke="url(#rib-wood)" stroke-width="3" stroke-linecap="round">
      <line x1="20" y1="180" x2="45" y2="70" />
      <line x1="20" y1="180" x2="75" y2="48" />
      <line x1="20" y1="180" x2="110" y2="32" />
      <line x1="20" y1="180" x2="150" y2="25" />
      <line x1="20" y1="180" x2="190" y2="28" />
      <line x1="20" y1="180" x2="225" y2="42" />
    </g>

    <!-- Clavillo / Remache central del abanico -->
    <circle cx="20" cy="180" r="8" fill="#F4B323" stroke="#9A690B" stroke-width="1.5" />
    <circle cx="20" cy="180" r="4" fill="#3A1C12" />
    <!-- Borla dorada que cuelga -->
    <path d="M20 188 C20 198, 22 200, 24 200 C26 200, 24 195, 20 188" stroke="#F4B323" stroke-width="2" />
  </svg>
</template>

<style scoped>
.spanish-fan {
  width: 100%;
  max-width: 220px;
  height: auto;
  pointer-events: none;
}
</style>
