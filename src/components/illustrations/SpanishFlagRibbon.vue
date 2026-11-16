<template>
  <svg
    class="spanish-ribbon"
    viewBox="0 0 320 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <!-- Onda Roja superior -->
    <path
      d="M320 0 H0 C80 15, 140 45, 200 40 C260 35, 290 60, 320 70 Z"
      fill="#A3121E"
    />
    <!-- Onda Amarilla/Azafrán central -->
    <path
      d="M320 30 C280 25, 240 45, 180 50 C120 55, 60 40, 0 35 L0 60 C70 65, 130 80, 190 75 C250 70, 280 95, 320 110 Z"
      fill="#F4B323"
    />
    <!-- Onda Roja inferior -->
    <path
      d="M320 85 C280 75, 230 95, 170 100 C110 105, 50 85, 0 80 L0 105 C60 110, 120 130, 180 120 C240 110, 280 135, 320 150 Z"
      fill="#B5121B"
      opacity="0.95"
    />
    <path
      d="M320 130 C270 120, 220 145, 160 145 C100 145, 50 130, 0 125 L0 140 C60 145, 110 165, 170 160 C230 155, 270 175, 320 180 Z"
      fill="#76151B"
      opacity="0.4"
    />
  </svg>
</template>

<style scoped>
.spanish-ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: clamp(200px, 30vw, 420px);
  height: clamp(90px, 15vw, 180px);
  pointer-events: none;
  z-index: 1;
}
</style>
