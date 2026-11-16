<template>
  <svg
    class="spanish-guitar"
    viewBox="0 0 240 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Gradiente madera cálida de la guitarra -->
      <linearGradient id="guitar-body" x1="60" y1="140" x2="200" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#F6BA5A" />
        <stop offset="50%" stop-color="#E28E25" />
        <stop offset="100%" stop-color="#B85D10" />
      </linearGradient>
      <linearGradient id="guitar-edge" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFE094" />
        <stop offset="100%" stop-color="#8A3E05" />
      </linearGradient>
      <radialGradient id="soundhole-depth" cx="50%" cy="50%" r="50%">
        <stop offset="70%" stop-color="#1A0D06" />
        <stop offset="100%" stop-color="#3A1C0A" />
      </radialGradient>
      <linearGradient id="carnation-red" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#EA2A38" />
        <stop offset="100%" stop-color="#9A0E17" />
      </linearGradient>
    </defs>

    <!-- Grupo con rotación ligera natural española (apoyada) -->
    <g transform="rotate(-12 120 220)">
      <!-- Pala / Clavijero -->
      <path
        d="M106 18 C106 8, 134 8, 134 18 L136 75 L104 75 Z"
        fill="#5E2A0A"
      />
      <!-- Ranuras del clavijero -->
      <rect x="110" y="24" width="4" height="38" rx="2" fill="#2E1203" />
      <rect x="126" y="24" width="4" height="38" rx="2" fill="#2E1203" />
      <!-- Clavijas -->
      <circle cx="102" cy="32" r="3.5" fill="#F4B323" />
      <circle cx="102" cy="44" r="3.5" fill="#F4B323" />
      <circle cx="102" cy="56" r="3.5" fill="#F4B323" />
      <circle cx="138" cy="32" r="3.5" fill="#F4B323" />
      <circle cx="138" cy="44" r="3.5" fill="#F4B323" />
      <circle cx="138" cy="56" r="3.5" fill="#F4B323" />

      <!-- Mástil / Diapasón -->
      <rect x="110" y="75" width="20" height="110" fill="#381A08" />
      <!-- Trastes metálicos -->
      <line x1="110" y1="92" x2="130" y2="92" stroke="#D19C48" stroke-width="1.2" />
      <line x1="110" y1="110" x2="130" y2="110" stroke="#D19C48" stroke-width="1.2" />
      <line x1="110" y1="128" x2="130" y2="128" stroke="#D19C48" stroke-width="1.2" />
      <line x1="110" y1="146" x2="130" y2="146" stroke="#D19C48" stroke-width="1.2" />
      <line x1="110" y1="164" x2="130" y2="164" stroke="#D19C48" stroke-width="1.2" />

      <!-- Caja de resonancia (cuerpo clásico de guitarra española en forma de 8) -->
      <path
        d="M120 170 
           C150 170, 175 186, 175 215 
           C175 235, 162 248, 154 260 
           C170 272, 195 295, 195 330 
           C195 375, 160 395, 120 395 
           C80 395, 45 375, 45 330 
           C45 295, 70 272, 86 260 
           C78 248, 65 235, 65 215 
           C65 186, 90 170, 120 170 Z"
        fill="url(#guitar-body)"
        stroke="url(#guitar-edge)"
        stroke-width="3"
        filter="drop-shadow(0 14px 28px rgba(74, 35, 22, 0.25))"
      />

      <!-- Boca / Roseta decorativa de guitarra clásica -->
      <circle cx="120" cy="225" r="26" fill="none" stroke="#682E0B" stroke-width="6" />
      <circle cx="120" cy="225" r="29" fill="none" stroke="#F4B323" stroke-width="1.5" stroke-dasharray="2 3" />
      <circle cx="120" cy="225" r="22" fill="url(#soundhole-depth)" />

      <!-- Puente -->
      <rect x="100" y="325" width="40" height="10" rx="2" fill="#3A1907" />
      <rect x="104" y="328" width="32" height="3" rx="1" fill="#FFF4D9" />

      <!-- 6 Cuerdas de guitarra -->
      <line x1="113" y1="75" x2="113" y2="328" stroke="#FFE9C2" stroke-width="1.2" opacity="0.85" />
      <line x1="116" y1="75" x2="116" y2="328" stroke="#FFE9C2" stroke-width="1.2" opacity="0.85" />
      <line x1="119" y1="75" x2="119" y2="328" stroke="#FFE9C2" stroke-width="1.2" opacity="0.85" />
      <line x1="121" y1="75" x2="121" y2="328" stroke="#FFE9C2" stroke-width="1.2" opacity="0.85" />
      <line x1="124" y1="75" x2="124" y2="328" stroke="#FFE9C2" stroke-width="1.2" opacity="0.85" />
      <line x1="127" y1="75" x2="127" y2="328" stroke="#FFE9C2" stroke-width="1.2" opacity="0.85" />
    </g>

    <!-- Claveles rojos (carnations) al pie de la guitarra -->
    <!-- Clavel 1 -->
    <g transform="translate(130, 310)">
      <path
        d="M30 40 C15 35, 10 20, 20 10 C25 5, 35 6, 40 12 C45 4, 58 6, 60 16 C68 12, 78 18, 75 28 C82 35, 78 48, 68 50 C70 60, 58 66, 48 62 C38 68, 25 62, 26 50 C16 48, 14 36, 25 32 Z"
        fill="url(#carnation-red)"
        filter="drop-shadow(0 4px 10px rgba(118, 21, 27, 0.3))"
      />
      <!-- Capas de pétalos ondulados del clavel -->
      <path
        d="M26 30 C34 22, 52 24, 60 32 C54 42, 40 44, 30 38 Z"
        fill="#FF3E4C"
      />
      <path
        d="M35 42 C45 36, 58 38, 62 48 C50 54, 42 52, 35 42 Z"
        fill="#BA141E"
      />
      <!-- Tallo y cáliz verde -->
      <path d="M42 62 C40 75, 45 90, 48 100" stroke="#477A50" stroke-width="3.5" stroke-linecap="round" />
      <path d="M42 60 C38 64, 44 68, 48 64" fill="#477A50" />
    </g>

    <!-- Clavel 2 pequeño -->
    <g transform="translate(170, 335) scale(0.7)">
      <path
        d="M30 40 C15 35, 10 20, 20 10 C25 5, 35 6, 40 12 C45 4, 58 6, 60 16 C68 12, 78 18, 75 28 C82 35, 78 48, 68 50 C70 60, 58 66, 48 62 C38 68, 25 62, 26 50 C16 48, 14 36, 25 32 Z"
        fill="url(#carnation-red)"
      />
      <path d="M28 32 C36 24, 50 25, 58 34 C50 42, 38 42, 28 32 Z" fill="#FF4F5B" />
    </g>
  </svg>
</template>

<style scoped>
.spanish-guitar {
  width: 100%;
  max-width: 260px;
  height: auto;
  pointer-events: none;
}
</style>
