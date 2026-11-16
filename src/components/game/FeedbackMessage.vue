<script setup>
defineProps({
  result: { type: String, default: null },   
})
</script>

<template>
  <div class="feedback" :class="result ? 'feedback--' + result : 'feedback--hidden'">
    <p v-if="result === 'correct'">¡Correcto! Has ganado 10 puntos</p>
    <p v-else-if="result === 'wrong'">Has fallado. La respuesta correcta está señalada en verde.</p>
    <p v-else-if="result === 'timeout'">¡Se acabó el tiempo!</p>
  </div>
</template>

<style scoped>
.feedback {
  min-height: 2.5rem;
  margin: 0.45rem auto 0;
  max-width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1.25rem;
  border-radius: 0px;
  text-align: center;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-weight: 800;
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  transition: transform 160ms ease, opacity 160ms ease;
}

.feedback p {
  margin: 0;
}

.feedback--hidden {
  visibility: hidden;
  opacity: 0;
  border: 2px solid transparent;
}

.feedback--correct {
  color: var(--ink-black, #141210);
  background: var(--verde-oliva-neon, #A3E635);
  border: 2px solid var(--ink-black, #141210);
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
}

.feedback--wrong {
  color: #FFFFFF;
  background: var(--vermut-red, #D92B2B);
  border: 2px solid var(--ink-black, #141210);
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
}

.feedback--timeout {
  color: var(--ink-black, #141210);
  background: var(--albero-gold, #F2A900);
  border: 2px solid var(--ink-black, #141210);
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
}

@media (max-width: 600px) {
  .feedback {
    min-height: 2.3rem;
    margin: 0.4rem auto 0;
    padding: 0.35rem 0.65rem;
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    box-shadow: 3px 3px 0px var(--ink-black, #141210);
  }
}
</style>
