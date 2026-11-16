<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import BaseButton from './BaseButton.vue'

const router = useRouter()
const game = useGameStore()
const name = ref('')

function start() {
  if (!name.value.trim()) return
  game.startGame(name.value.trim())   // reinicia la partida y guarda el nombre
  router.push({ name: 'Playing' })
}
</script>

<template>
  <section class="start-form">
    <div class="start-form__top-stripe">
      ★ REGISTRO OFICIAL DE JUGADORES ★
    </div>

    <div class="start-form__inner">
      <h2>Empieza ahora</h2>
      <p>Introduce tu nombre para comenzar el desafío musical.</p>

      <form class="start-form__form" @submit.prevent="start">
        <label for="player-name" class="sr-only">Nombre del jugador</label>
        <input
          id="player-name"
          v-model="name"
          type="text"
          name="playerName"
          placeholder="¿CÓMO TE LLAMAS?"
          autocomplete="name"
        />
        <BaseButton class="btn btn--primary" text="EMPEZAR A JUGAR" type="submit" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.start-form {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border: 3px solid var(--ink-black, #141210);
  border-radius: 0px;
  background: var(--surface-card, #FFFDF9);
  text-align: center;
  box-shadow: 8px 8px 0px var(--ink-black, #141210);
  box-sizing: border-box;
  overflow: hidden;
}

.start-form__top-stripe {
  background: var(--ink-black, #141210);
  color: var(--albero-gold, #F2A900);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid var(--ink-black, #141210);
  text-transform: uppercase;
}

.start-form__inner {
  margin: 8px;
  padding: clamp(2rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.5rem);
  border: 1.5px solid var(--ink-black, #141210);
  background: var(--surface-card, #FFFDF9);
}

.start-form h2 {
  margin: 0 0 0.5rem;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--ink-black, #141210);
}

.start-form p {
  margin: 0 0 1.8rem;
  color: #55504A;
  font-family: var(--font-sans, 'Space Grotesk', sans-serif);
  font-size: 1.05rem;
  font-weight: 500;
}

.start-form__form {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
}

.start-form__form input {
  min-width: 0;
  min-height: 3.25rem;
  flex: 1;
  padding: 0.85rem 1.25rem;
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  color: var(--ink-black, #141210);
  background: #FFFFFF;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
  transition:
    border-color 140ms ease,
    box-shadow 140ms ease;
}

.start-form__form input::placeholder {
  color: #8C847A;
  opacity: 0.9;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.start-form__form input:focus {
  border-color: var(--ink-black, #141210);
  box-shadow: 5px 5px 0px var(--ink-black, #141210);
  outline: none;
  background: #FFFDF9;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}

@media (max-width: 580px) {
  .start-form__inner {
    margin: 5px;
    padding: 1.5rem 1rem;
  }

  .start-form__form {
    flex-direction: column;
    gap: 0.85rem;
  }

  .start-form__form .btn {
    width: 100%;
  }
}
</style>
