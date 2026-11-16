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
      :class="{ 
        'active': n <= gameStore.currentRound,
        'completed': n < gameStore.currentRound,
        'current': n === gameStore.currentRound,
        //cambiar color barra tareas segun acierto o fallo
        'correct': gameStore.roundResults && gameStore.roundResults[n - 1] === 'correct',
        'wrong': gameStore.roundResults && gameStore.roundResults[n - 1] === 'wrong'
      }"
    >
      <span class="step-num">{{ n }}</span>
    </div>
  </div>
</template>

<style scoped>
.progress-bar-container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: min(100%, 620px);
  margin: 1.25rem auto 1.5rem;
}

.progress-step {
  flex: 1;
  height: 28px;
  background-color: #FFFDF9;
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  box-shadow: 2px 2px 0px var(--ink-black, #141210);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 160ms ease, transform 160ms ease, box-shadow 160ms ease, color 160ms ease;
}

.step-num {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 800;
  color: #7A7268;
  line-height: 1;
}

/* Ronda actual en curso (esperando respuesta): iluminada en Albero Gold */
.progress-step.current:not(.correct):not(.wrong) {
  background-color: var(--albero-gold, #F2A900);
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
  transform: translateY(-2px);
}

.progress-step.current:not(.correct):not(.wrong) .step-num {
  color: var(--ink-black, #141210);
}

/* cambiar color barra tareas segun acierto o fallo */
.progress-step.correct {
  background-color: var(--verde-oliva-neon, #A3E635) !important;
  box-shadow: 2px 2px 0px var(--ink-black, #141210);
}

.progress-step.correct .step-num {
  color: var(--ink-black, #141210);
  font-weight: 900;
}

.progress-step.wrong {
  background-color: var(--vermut-red, #D92B2B) !important;
  box-shadow: 2px 2px 0px var(--ink-black, #141210);
}

.progress-step.wrong .step-num {
  color: #FFFFFF;
  font-weight: 900;
}

@media (max-width: 600px) {
  .progress-bar-container {
    gap: 4px;
    margin: 0.5rem auto 0.65rem;
  }

  .progress-step {
    height: 20px;
    border-width: 1.5px;
    box-shadow: 1.5px 1.5px 0px var(--ink-black, #141210);
  }

  .step-num {
    font-size: 0.62rem;
  }
}
</style>
