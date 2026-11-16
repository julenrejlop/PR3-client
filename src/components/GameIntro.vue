<script setup>
import PlayerNameForm from './PlayerNameForm.vue';
</script>

<template>
  <div class="game-intro-container">
    <section class="game-instructions">
      <div class="game-instructions__top-stripe">
        ★ BASES DEL CONCURSO Y REGLAMENTO DE SALA ★
      </div>

      <div class="game-instructions__inner">
        <div class="game-instructions__header">
          <div class="game-instructions__icon">
            ♫
          </div>
          <h2>¿Cómo funciona?</h2>
          <p class="game-instructions__subtitle">
            ¡Demuestra cuánto sabes de música española!
          </p>
        </div>

        <ul class="game-instructions__list">
          <li class="game-instructions__item item--1">
            <span class="game-instructions__number">1</span>
            <span class="game-instructions__text">
              Escucha un fragmento de 5 segundos de una canción patria.
            </span>
          </li>

          <li class="game-instructions__item item--2">
            <span class="game-instructions__number">2</span>
            <span class="game-instructions__text">
              Elige el título correcto entre 4 opciones en pantalla.
            </span>
          </li>

          <li class="game-instructions__item item--3">
            <span class="game-instructions__number">3</span>
            <span class="game-instructions__text">
              Gana 10 puntos limpios por cada respuesta acertada.
            </span>
          </li>

          <li class="game-instructions__item item--4">
            <span class="game-instructions__number">4</span>
            <span class="game-instructions__text">
              Completa las 10 rondas y álzate con el trofeo nacional.
            </span>
          </li>
        </ul>
      </div>
    </section>

    <PlayerNameForm/>
  </div>
</template>

<style scoped>
.game-intro-container {
  width: min(100%, 780px);
  margin: 1.5rem auto 4rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.game-instructions {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: var(--surface-card, #FFFDF9);
  border: 3px solid var(--ink-black, #141210);
  border-radius: 0px;
  color: var(--ink-black, #141210);
  box-shadow: 8px 8px 0px var(--ink-black, #141210);
  box-sizing: border-box;
  overflow: hidden;
}

.game-instructions__top-stripe {
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

.game-instructions__inner {
  margin: 8px;
  padding: clamp(1.75rem, 5vw, 2.5rem);
  border: 1.5px solid var(--ink-black, #141210);
  background: var(--surface-card, #FFFDF9);
}

.game-instructions__header {
  text-align: center;
  margin-bottom: 2rem;
}

.game-instructions__icon {
  width: 52px;
  height: 52px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  border: 2px solid var(--ink-black, #141210);
  background: var(--vermut-red, #D92B2B);
  color: #FFFFFF;
  font-size: 1.75rem;
  font-weight: 800;
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
}

.game-instructions h2 {
  margin: 0;
  text-align: center;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: clamp(1.8rem, 4vw, 2.3rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--ink-black, #141210);
}

.game-instructions__subtitle {
  margin: 0.5rem 0 0;
  text-align: center;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vermut-red, #D92B2B);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.game-instructions__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.game-instructions__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.15rem;
  border: 2px solid var(--ink-black, #141210);
  background: #FFFFFF;
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
  border-radius: 0px;
}

.game-instructions__number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1.1rem;
  font-weight: 800;
}

.item--1 .game-instructions__number {
  background: var(--albero-gold, #F2A900);
  color: var(--ink-black, #141210);
}

.item--2 .game-instructions__number {
  background: var(--vermut-red, #D92B2B);
  color: #FFFFFF;
}

.item--3 .game-instructions__number {
  background: var(--verde-oliva-neon, #A3E635);
  color: var(--ink-black, #141210);
}

.item--4 .game-instructions__number {
  background: var(--azulejo-blue, #1D4ED8);
  color: #FFFFFF;
}

.game-instructions__text {
  font-family: var(--font-sans, 'Space Grotesk', sans-serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink-black, #141210);
  line-height: 1.4;
}

@media (max-width: 580px) {
  .game-instructions__inner {
    margin: 5px;
    padding: 1.5rem 1rem;
  }

  .game-instructions__item {
    padding: 0.75rem 0.85rem;
    gap: 0.75rem;
  }
}
</style>
