<script setup>
import GameIntro from '@/components/GameIntro.vue';
import PlayerNameForm from '@/components/PlayerNameForm.vue';
</script>

<template>
  <main class="game-view">
    <GameIntro/>
  </main>
</template>

<style scoped>
.game-view {
  min-height: calc(100vh - 74px);
  padding: clamp(1.5rem, 4vw, 3rem) 1rem 4rem;
  background-color: var(--bg-paper, #F6F2EA);
  background-image: radial-gradient(var(--ink-black, #141210) 0.75px, transparent 0.75px);
  background-size: 24px 24px;
}
</style>
