<template>
  <svg
    class="flamenco-dancer"
    viewBox="0 0 280 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="dress-grad" x1="50" y1="120" x2="220" y2="420" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#D92532" />
        <stop offset="50%" stop-color="#B5121B" />
        <stop offset="100%" stop-color="#76151B" />
      </linearGradient>
      <linearGradient id="ruffle-light" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#EA3E4A" />
        <stop offset="100%" stop-color="#9E141D" />
      </linearGradient>
      <linearGradient id="skin-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D99B77" />
        <stop offset="100%" stop-color="#B8734C" />
      </linearGradient>
    </defs>

    <!-- Brazo izquierdo levantado con elegancia sobre la cabeza -->
    <path
      d="M125 105 C115 80, 100 45, 110 25 C115 15, 126 12, 134 18 C140 22, 142 32, 136 45 C128 65, 135 88, 142 108 Z"
      fill="url(#skin-grad)"
    />
    <!-- Mano izquierda estilizada -->
    <path
      d="M110 25 C107 18, 106 10, 112 5 C118 0, 126 6, 128 14 C132 8, 139 7, 140 14 C140 20, 134 24, 130 26 Z"
      fill="url(#skin-grad)"
    />

    <!-- Cuello y hombros -->
    <path
      d="M136 102 C134 90, 142 80, 148 72 C154 82, 162 90, 168 102 C158 108, 146 108, 136 102 Z"
      fill="url(#skin-grad)"
    />

    <!-- Cabeza en perfil elegante -->
    <path
      d="M144 72 C138 68, 135 58, 138 50 C140 44, 146 40, 154 42 C162 44, 168 50, 166 60 C164 68, 156 74, 148 72 Z"
      fill="url(#skin-grad)"
    />

    <!-- Cabello oscuro recogido en moño flamenco -->
    <path
      d="M136 54 C134 42, 142 30, 156 28 C168 26, 178 34, 178 46 C178 54, 172 62, 164 65 C162 58, 158 52, 150 50 C144 48, 138 50, 136 54 Z"
      fill="#1C1311"
    />
    <!-- Moño -->
    <ellipse cx="172" cy="40" rx="14" ry="12" fill="#1C1311" />

    <!-- Clavel rojo en el cabello -->
    <path
      d="M165 30 C162 24, 168 18, 174 20 C180 18, 185 24, 182 30 C186 34, 182 40, 176 38 C170 42, 164 36, 165 30 Z"
      fill="#D92532"
    />
    <circle cx="173" cy="29" r="4" fill="#F4B323" />

    <!-- Brazo derecho que desciende arqueado hacia la cadera -->
    <path
      d="M166 104 C185 115, 205 135, 198 160 C194 175, 182 188, 174 195 C170 190, 176 178, 182 165 C186 148, 172 130, 160 118 Z"
      fill="url(#skin-grad)"
    />

    <!-- Torso y corpiño entallado -->
    <path
      d="M136 104 C132 120, 130 142, 136 160 C140 172, 148 185, 152 198 C162 194, 170 186, 172 172 C176 150, 172 125, 164 104 C155 109, 145 109, 136 104 Z"
      fill="url(#dress-grad)"
    />
    <!-- Escote del vestido -->
    <path
      d="M136 104 C145 114, 155 114, 164 104 C162 110, 155 118, 146 118 C138 118, 135 110, 136 104 Z"
      fill="#76151B"
    />

    <!-- Falda de volantes flamenca (capas con movimiento dinámico) -->
    <!-- Capa 1 superior de cadera -->
    <path
      d="M148 190 C125 210, 100 230, 80 260 C75 268, 80 274, 92 272 C115 268, 140 250, 162 238 C174 232, 180 220, 175 200 C165 194, 155 192, 148 190 Z"
      fill="url(#ruffle-light)"
    />
    <path
      d="M80 260 C100 266, 125 258, 150 244 C165 236, 175 240, 182 248 C160 260, 130 275, 100 282 C82 286, 74 275, 80 260 Z"
      fill="#9E141D"
    />

    <!-- Capa 2 intermedia de volantes -->
    <path
      d="M90 270 C65 295, 42 325, 30 360 C26 372, 34 378, 50 374 C80 366, 115 340, 150 315 C175 298, 192 280, 185 255 C165 265, 140 278, 115 285 C98 290, 92 280, 90 270 Z"
      fill="url(#dress-grad)"
    />
    <path
      d="M30 360 C55 368, 90 354, 130 330 C165 310, 195 295, 210 310 C180 335, 135 365, 85 385 C55 396, 32 384, 30 360 Z"
      fill="#B5121B"
    />

    <!-- Gran volante inferior y cola (bata de cola) con pliegues ondulados -->
    <path
      d="M40 370 C20 400, 5 425, 2 435 C0 440, 15 440, 35 435 C70 425, 110 405, 155 375 C195 348, 225 325, 245 340 C220 375, 175 410, 120 432 C80 445, 40 442, 35 435 Z"
      fill="url(#ruffle-light)"
    />
    <path
      d="M12 438 C40 432, 80 415, 130 385 C175 358, 215 340, 248 355 C225 390, 175 425, 115 440 C75 448, 35 446, 12 438 Z"
      fill="#76151B"
    />
    <path
      d="M50 432 C90 425, 140 400, 185 370 C220 348, 250 360, 265 380 C235 415, 185 438, 130 442 C95 444, 65 440, 50 432 Z"
      fill="#D92532"
    />
  </svg>
</template>

<style scoped>
.flamenco-dancer {
  width: 100%;
  max-width: 250px;
  height: auto;
  filter: drop-shadow(0 12px 24px rgba(118, 21, 27, 0.22));
}
</style>
