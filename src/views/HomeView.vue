<script setup>
import '@/assets/oido-musical.css'
import BaseButton from '@/components/BaseButton.vue';
import PlayerNameForm from '@/components/PlayerNameForm.vue';
</script>

<template>
  <main class="home">
    <section class="hero">
      <div class="hero__header-badge">
        ★ GRAN ARCHIVO SONORO NACIONAL • DESDE LA COPLA HASTA EL INDIE ★
      </div>

      <div class="hero__body">
        <h1>¿Cuánto sabes de música española?</h1>

        <div class="hero__tagline-wrapper">
          <p class="hero__tagline">ESCUCHA. RECUERDA. ADIVINA.</p>
        </div>

        <p class="hero__description">10 canciones. 4 opciones. Solo una respuesta correcta.</p>
        <p class="hero__question">¿Preparado para poner a prueba tu oído?</p>

        <div class="hero__cta">
          <BaseButton class="btn btn--primary" text="EMPEZAR A JUGAR" to="/Game"/>
        </div>
      </div>
    </section>

    <section class="how-to-play">
      <div class="how-to-play__heading-box">
        <span class="how-to-play__eyebrow">REGLAMENTO OFICIAL</span>
        <h2>Cómo se juega</h2>
      </div>

      <ol class="how-to-play__steps">
        <li class="step step--1">
          <div class="step__troquel">
            <span class="step__badge">01</span>
            <span class="step__tag">PASO UNO</span>
          </div>
          <div class="step__content">
            <h3>Escucha con atención</h3>
            <p>Sonarán unos segundos aleatorios de una canción española.</p>
          </div>
        </li>

        <li class="step step--2">
          <div class="step__troquel">
            <span class="step__badge">02</span>
            <span class="step__tag">PASO DOS</span>
          </div>
          <div class="step__content">
            <h3>Elige tu respuesta</h3>
            <p>Tendrás cuatro canciones entre las que elegir. Solo una es la correcta.</p>
          </div>
        </li>

        <li class="step step--3">
          <div class="step__troquel">
            <span class="step__badge">03</span>
            <span class="step__tag">PASO TRES</span>
          </div>
          <div class="step__content">
            <h3>Descubre tu puntuación</h3>
            <p>Completa las 10 rondas y descubre cuántas canciones has conseguido reconocer.</p>
          </div>
        </li>
      </ol>
    </section>

    <PlayerNameForm/>
  </main>
</template>

<style scoped>
</style>
