<script setup>
import { onBeforeUnmount } from 'vue'
import ShowPoints from '@/components/game/ShowPoints.vue';
import ShowRound from '@/components/game/ShowRound.vue';
import ShowUserName from '@/components/game/ShowUserName.vue';
import { useGameStore } from '@/stores/game';
import ProgressBar from '@/components/game/ProgressBar.vue';
import GameTitle from '@/components/game/GameTitle.vue';
import QuestionCard from '@/components/game/QuestionCard.vue';

const gameStore = useGameStore()
let timer = null

function onSelect(option) {
  gameStore.answer(option)
  timer = setTimeout(() => gameStore.advance(), 1500)
}
//cancelar timer si el usuario sale
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <GameTitle/>
  <ShowUserName :username="gameStore.username" />
  <ShowPoints :points="gameStore.points" />
  <ShowRound/>
  <ProgressBar/>
  <QuestionCard
    v-if="!gameStore.finished"
    :key="gameStore.currentRound"
    :question="gameStore.currentQuestion"
    :selected="gameStore.selectedOption"
    @select="onSelect"
  />

  <!-- provisional: aquí irá el componente de resultados -->
  <p v-else>Fin del juego: {{ gameStore.points }} puntos</p>
</template>

<style scoped></style>