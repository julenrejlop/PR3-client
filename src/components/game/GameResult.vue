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
    <div class="game-result__top-stripe">
      ★ CERTIFICADO OFICIAL DE RESULTADOS ★
    </div>

    <div class="game-result__inner">
      <div class="game-result__badge">
      </div>

      <h2>Fin del juego, {{ gameStore.username }}</h2>

      <div class="game-result__phrase-tape">
        <p class="game-result__phrase">{{ phrase }}</p>
      </div>

      <div class="game-result__score-highlight">
        <span class="game-result__score-label">PUNTUACIÓN FINAL</span>
        <span class="game-result__score-number">{{ gameStore.points }}</span>
        <span class="game-result__score-unit">PUNTOS</span>
      </div>

      <ul class="game-result__stats">
        <li class="stat-card">
          <span class="stat-card__label">ACIERTOS</span>
          <strong class="stat-card__value">{{ gameStore.correctCount }} / {{ gameStore.totalRounds }}</strong>
        </li>
        <li class="stat-card">
          <span class="stat-card__label">PRECISIÓN</span>
          <strong class="stat-card__value">{{ gameStore.accuracy }}%</strong>
        </li>
        <li class="stat-card">
          <span class="stat-card__label">TIEMPO TOTAL</span>
          <strong class="stat-card__value">{{ gameStore.totalTime.toFixed(1) }} s</strong>
        </li>
      </ul>

      <p class="game-result__position">
        Has quedado en la posición <strong>{{ gameStore.position }}</strong>
      </p>

      <div class="game-result__actions">
        <BaseButton class="btn btn--primary" text="VOLVER A JUGAR" @click="playAgain" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.game-result {
  width: 100%;
  max-width: 640px;
  margin: 1.5rem auto 3rem;
  background: var(--surface-card, #FFFDF9);
  border: 3px solid var(--ink-black, #141210);
  border-radius: 0px;
  text-align: center;
  box-shadow: 8px 8px 0px var(--ink-black, #141210);
  overflow: hidden;
}

.game-result__top-stripe {
  background: var(--ink-black, #141210);
  color: var(--albero-gold, #F2A900);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  text-align: center;
  border-bottom: 2px solid var(--ink-black, #141210);
  text-transform: uppercase;
}

.game-result__inner {
  margin: 8px;
  padding: clamp(2rem, 5vw, 3rem) clamp(1.2rem, 4vw, 2.5rem);
  border: 1.5px solid var(--ink-black, #141210);
  background: var(--surface-card, #FFFDF9);
}

.game-result__badge {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  background: var(--albero-gold, #F2A900);
  border: 2px solid var(--ink-black, #141210);
  font-size: 2rem;
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
}

.game-result h2 {
  margin: 0;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  color: var(--ink-black, #141210);
}

.game-result__phrase-tape {
  display: inline-block;
  margin: 0.85rem auto 1.75rem;
  padding: 0.4rem 1.25rem;
  background: var(--vermut-red, #D92B2B);
  border: 2px solid var(--ink-black, #141210);
  box-shadow: 2px 2px 0px var(--ink-black, #141210);
}

.game-result__phrase {
  margin: 0;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.92rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Marcador digital / analógico estilo estudio */
.game-result__score-highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 2rem;
  padding: 1.25rem 1.5rem;
  background: var(--ink-black, #141210);
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  width: min(100%, 340px);
  box-shadow: 5px 5px 0px var(--ink-black, #141210);
}

.game-result__score-label {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--bg-paper, #F6F2EA);
}

.game-result__score-number {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin: 0.35rem 0;
  color: var(--albero-gold, #F2A900);
}

.game-result__score-unit {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--bg-paper, #F6F2EA);
}

/* Fichas técnicas de estadísticas */
.game-result__stats {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0;
  margin: 0 auto 2.5rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 0.5rem;
  background: #FFFFFF;
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
}

.stat-card__label {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 800;
  color: #6A635B;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.stat-card__value {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--ink-black, #141210);
}

.game-result__actions {
  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  .game-result {
    margin: 0.4rem auto 0.8rem;
    box-shadow: 4px 4px 0px var(--ink-black, #141210);
  }

  .game-result__top-stripe {
    font-size: 0.68rem;
    padding: 0.35rem 0.6rem;
    letter-spacing: 0.08em;
  }

  .game-result__inner {
    margin: 3px;
    padding: 0.85rem 0.65rem 1rem;
  }

  .game-result__badge {
    width: 44px;
    height: 44px;
    font-size: 1.4rem;
    margin: 0 auto 0.45rem;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
  }

  .game-result h2 {
    font-size: 1.25rem;
    line-height: 1.15;
  }

  .game-result__phrase-tape {
    margin: 0.35rem auto 0.65rem;
    padding: 0.25rem 0.75rem;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
  }

  .game-result__phrase {
    font-size: 0.75rem;
    letter-spacing: 0.03em;
  }

  .game-result__score-highlight {
    margin: 0 auto 0.65rem;
    padding: 0.45rem 1rem;
    max-width: 210px;
    box-shadow: 3px 3px 0px var(--ink-black, #141210);
  }

  .game-result__score-label {
    font-size: 0.68rem;
    letter-spacing: 0.08em;
  }

  .game-result__score-number {
    font-size: 2.5rem;
    margin: 0.1rem 0;
  }

  .game-result__score-unit {
    font-size: 0.72rem;
  }

  /* 3 estadísticas en 1 fila horizontal */
  .game-result__stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.45rem;
    margin: 0 auto 0.85rem;
  }

  .stat-card {
    flex-direction: column;
    justify-content: center;
    padding: 0.45rem 0.25rem;
    gap: 0.2rem;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
  }

  .stat-card__label {
    font-size: 0.62rem;
    letter-spacing: 0.04em;
  }

  .stat-card__value {
    font-size: 1rem;
  }

  .game-result__actions :deep(.custom_button) {
    min-height: 2.75rem;
    padding: 0.65rem 1.6rem;
    font-size: 0.9rem;
    box-shadow: 3px 3px 0px var(--ink-black, #141210);
  }
}
</style>
