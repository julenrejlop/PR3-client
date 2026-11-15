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
    <h2>Empieza ahora</h2>
    <p>Introduce tu nombre para comenzar el desafío.</p>

    <form class="start-form__form" @submit.prevent="start">
      <label for="player-name" class="sr-only">Nombre del jugador</label>
      <input
        id="player-name"
        v-model="name"
        type="text"
        name="playerName"
        placeholder="¿Cómo te llamas?"
        autocomplete="name"
      />
      <br />
      <BaseButton class="btn btn--primary" text="EMPEZAR A JUGAR" type="submit" />
    </form>
  </section>
</template>

<style scoped></style>