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
  <main class="playing-view">
    <GameResult v-if="gameStore.finished" />

    <div v-else class="playing-container">
      <GameTitle/>

      <div class="playing-status-bar">
        <ShowUserName :username="gameStore.username" />
        <ShowRound/>
        <ShowPoints :points="gameStore.points" />
      </div>

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
    </div>
  </main>
</template>

<style scoped>
.playing-view {
  min-height: calc(100vh - 74px);
  padding: clamp(1.5rem, 4vw, 3rem) 1rem 4rem;
  background-color: var(--bg-paper, #F6F2EA);
  background-image: radial-gradient(var(--ink-black, #141210) 0.75px, transparent 0.75px);
  background-size: 24px 24px;
}

.playing-container {
  width: min(100%, 720px);
  margin: 0 auto;
}

.playing-status-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin: 0 auto 0.75rem;
}

@media (max-width: 600px) {
  .playing-view {
    padding: 0.65rem 0.65rem 1.25rem;
    min-height: auto;
  }

  .playing-status-bar {
    gap: 0.45rem;
    margin: 0 auto 0.55rem;
    flex-wrap: nowrap;
  }
}
</style>
