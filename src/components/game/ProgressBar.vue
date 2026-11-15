<script setup>
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

</script>

<template>
  <div class="progress-bar-container">
    <div 
      v-for="n in gameStore.totalRounds" 
      :key="n"
      class="progress-step"
      :class="{ 'active': n <= gameStore.currentRound }"
    ></div>
  </div>
</template>


<style scoped>
.progress-bar-container {
  display: flex;
  justify-content: space-between;
  gap: 5px; /* Espacio entre los bloques */
  width: 100%;
  margin: 15px 0;
}

.progress-step {
  flex: 1; /* Hace que todos los bloques midan lo mismo */
  height: 15px;
  background-color: #333; /* Color oscuro para las rondas futuras */
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

/* Esta clase se aplica automáticamente a la ronda actual y a las pasadas */
.progress-step.active {
  background-color: #ffc107; /* Color dorado/amarillo para las rondas completadas */
}
</style>