<script setup>
import PlayerNameForm from './PlayerNameForm.vue';

</script>

<template>
  <br>
  <section class="game-instructions">
    <div class="game-instructions__icon">
      ♫
    </div>

    <h2>¿Cómo funciona?</h2>

    <p class="game-instructions__subtitle">
      ¡Demuestra cuánto sabes de música!
    </p>

    <ul class="game-instructions__list">
      <li class="game-instructions__item">
        <span class="game-instructions__number">1</span>
        <span class="game-instructions__text">
          Escucha un fragmento de 5 segundos de una canción.
        </span>
      </li>

      <li class="game-instructions__item">
        <span class="game-instructions__number">2</span>
        <span class="game-instructions__text">
          Elige el título correcto entre 4 opciones.
        </span>
      </li>

      <li class="game-instructions__item">
        <span class="game-instructions__number">3</span>
        <span class="game-instructions__text">
          Gana 10 puntos por cada respuesta correcta.
        </span>
      </li>

      <li class="game-instructions__item">
        <span class="game-instructions__number">4</span>
        <span class="game-instructions__text">
          Completa las 10 rondas y consigue la máxima puntuación.
        </span>
      </li>
    </ul>
  </section>
  <br>
  <PlayerNameForm/>
</template>

<style scoped>
.game-instructions {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #263746;
  border-radius: 18px;
  color: #F3F0E8;
  box-sizing: border-box;
}

.game-instructions__icon {
  width: 55px;
  height: 55px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #B68D40;
  color: #121820;
  font-size: 2rem;
}

.game-instructions h2 {
  margin: 0;
  text-align: center;
  font-size: 1.4rem;
}

.game-instructions__subtitle {
  margin: 0.6rem 0 2rem;
  text-align: center;
  color: #A7B5A4;
  font-size: 0.95rem;
}

.game-instructions__list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.game-instructions__item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.game-instructions__number {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(182, 141, 64, 0.2);
  color: #B68D40;
  font-weight: 600;
}

.game-instructions__text {
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 480px) {
  .game-instructions {
    padding: 1.5rem;
  }
}
</style>
