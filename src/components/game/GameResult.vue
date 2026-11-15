<script setup>
import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import BaseButton from '@/components/BaseButton.vue'

const gameStore = useGameStore()

// frase segun el porcentaje de aciertos
const phrase = computed(() => {
  const accuracy = gameStore.accuracy

  if (accuracy === 100) return '¡Perfecto! Tienes un oído de oro'
  if (accuracy >= 70) return '¡Muy bien! Conoces la música española'
  if (accuracy >= 40) return 'No está mal, pero puedes mejorar'
  return 'Tienes que escuchar más música española'
})

function playAgain() {
  gameStore.startGame(gameStore.username)
}
</script>

<template>
  <section class="game-result">
    <h2>Fin del juego, {{ gameStore.username }}</h2>
    <p class="game-result__phrase">{{ phrase }}</p>

    <ul class="game-result__stats">
      <li>Puntos: <strong>{{ gameStore.points }}</strong></li>
      <li>Aciertos: <strong>{{ gameStore.correctCount }} / {{ gameStore.totalRounds }}</strong></li>
      <li>Precisión: <strong>{{ gameStore.accuracy }}%</strong></li>
      <li>Tiempo total: <strong>{{ gameStore.totalTime.toFixed(1) }} s</strong></li>
    </ul>

    <!-- añadir ranking -->

    <BaseButton class="btn btn--primary" text="VOLVER A JUGAR" @click="playAgain" />
  </section>
</template>

<style scoped>
.game-result {
  width: 100%;
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--color-surface);
  border-radius: 18px;
  text-align: center;
}
.game-result__phrase {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: var(--color-accent);
}
.game-result__stats {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
}
</style>