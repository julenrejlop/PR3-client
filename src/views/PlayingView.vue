<script setup>
import { onBeforeUnmount } from 'vue'
import ShowPoints from '@/components/game/ShowPoints.vue';
import ShowRound from '@/components/game/ShowRound.vue';
import ShowUserName from '@/components/game/ShowUserName.vue';
import { useGameStore } from '@/stores/game';
import ProgressBar from '@/components/game/ProgressBar.vue';
import GameTitle from '@/components/game/GameTitle.vue';
import QuestionCard from '@/components/game/QuestionCard.vue';
import CountDown from '@/components/game/CountDown.vue';
import FeedbackMessage from '@/components/game/FeedbackMessage.vue';
import GameResult from '@/components/game/GameResult.vue';

const gameStore = useGameStore()
let timer = null


// esperar 2 segundos antes de pasar al siguiente
function goNext() {
  timer = setTimeout(() => gameStore.advance(), 2000)
}

function onSelect(option) {
  gameStore.answer(option)
  goNext()
}

function onTimeout() {
  gameStore.timeUp()
  goNext()
}

//cancelar timer si el usuario sale
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <GameResult v-if="gameStore.finished" />

  <template v-else>
    <GameTitle/>
    <ShowUserName :username="gameStore.username" />
    <ShowPoints :points="gameStore.points" />
    <ShowRound/>
    <ProgressBar/>
    <CountDown
      :key="gameStore.currentRound"
      :stopped="gameStore.selectedOption !== null"
      @timeout="onTimeout"
    />
    <QuestionCard
      :key="gameStore.currentRound"
      :question="gameStore.currentQuestion"
      :selected="gameStore.selectedOption"
      @select="onSelect"
    />
    <FeedbackMessage :result="gameStore.result" />
  </template>
</template>

<style scoped></style>