<script setup>
import '@/assets/oido-musical.css'
import BaseButton from '@/components/BaseButton.vue';
import PlayerNameForm from '@/components/PlayerNameForm.vue';

</script>
<template>
  <main class="home">
    <section class="hero">
      <h1>¿Cuánto sabes de música española?</h1>
      <p class="hero__tagline">Escucha. Recuerda. Adivina.</p>
      <p class="hero__description">10 canciones. 4 opciones. Solo una respuesta correcta.</p>
      <p class="hero__question">¿Preparado para poner a prueba tu oído?</p>
      <BaseButton class="btn btn--primary" text="EMPEZAR A JUGAR" to="/Game"/>
      
      
    </section>

    
    <section class="how-to-play">
      <h2>Cómo se juega</h2>
      <ol class="how-to-play__steps">
        <li class="step">
          <h3>Escucha con atención</h3>
          <p>Sonarán unos segundos aleatorios de una canción española.</p>
        </li>
        <li class="step">
          <h3>Elige tu respuesta</h3>
          <p>Tendrás cuatro canciones entre las que elegir. Solo una es la correcta.</p>
        </li>
        <li class="step">
          <h3>Descubre tu puntuación</h3>
          <p>Completa las 10 rondas y descubre cuántas canciones has conseguido reconocer.</p>
        </li>
      </ol>
    </section>
    <PlayerNameForm/>
    
    
  </main>
</template>

<style scoped>



</style>