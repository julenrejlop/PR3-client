<template>
  <svg
    class="spanish-carnations"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="carnation-petal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E92938" />
        <stop offset="60%" stop-color="#B5121B" />
        <stop offset="100%" stop-color="#76151B" />
      </linearGradient>
    </defs>

    <!-- Clavel grande -->
    <g transform="translate(10, 10)">
      <path
        d="M50 70 C25 62, 16 38, 30 22 C38 14, 52 16, 60 25 C68 12, 88 15, 92 30 C104 24, 120 34, 115 50 C125 60, 120 80, 105 84 C108 98, 90 108, 75 102 C60 110, 40 102, 42 82 C26 78, 22 60, 38 52 Z"
        fill="url(#carnation-petal)"
        filter="drop-shadow(0 6px 14px rgba(118, 21, 27, 0.28))"
      />
      <path d="M42 48 C55 36, 82 38, 95 50 C85 66, 62 70, 48 60 Z" fill="#FF4452" />
      <path d="M55 68 C70 58, 90 62, 98 76 C80 86, 68 82, 55 68 Z" fill="#B5121B" />

      <!-- Cáliz y tallo -->
      <path d="M66 102 C62 120, 58 140, 52 155" stroke="#477A50" stroke-width="4" stroke-linecap="round" />
      <path d="M66 100 C60 106, 70 112, 74 104" fill="#477A50" />
      <!-- Hoja fina verde del clavel -->
      <path d="M60 125 C45 120, 35 110, 30 105 C35 118, 48 130, 58 132 Z" fill="#477A50" />
    </g>

    <!-- Clavel menor -->
    <g transform="translate(80, 50) scale(0.65)">
      <path
        d="M50 70 C25 62, 16 38, 30 22 C38 14, 52 16, 60 25 C68 12, 88 15, 92 30 C104 24, 120 34, 115 50 C125 60, 120 80, 105 84 C108 98, 90 108, 75 102 C60 110, 40 102, 42 82 C26 78, 22 60, 38 52 Z"
        fill="url(#carnation-petal)"
      />
      <path d="M42 48 C55 36, 82 38, 95 50 C85 66, 62 70, 48 60 Z" fill="#FF525E" />
    </g>
  </svg>
</template>

<style scoped>
.spanish-carnations {
  width: 100%;
  max-width: 140px;
  height: auto;
  pointer-events: none;
}
</style>
