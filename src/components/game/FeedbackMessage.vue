<script setup>
defineProps({
  result: { type: String, default: null },   
})
</script>

<template>
  <div class="feedback" :class="result ? 'feedback--' + result : ''">
    <p v-if="result === 'correct'">¡Correcto! Has ganado 10 puntos</p>
    <p v-else-if="result === 'wrong'">Has fallado. La respuesta correcta está en verde.</p>
    <p v-else-if="result === 'timeout'">No has contestado a tiempo.</p>
  </div>
</template>

<style scoped>
.feedback {
  min-height: 3rem;   /* para que la página no salte al aparecer el mensaje */
  margin: 1rem 0;
  text-align: center;
  font-weight: 600;
}
.feedback--correct { color: #4fb37c; }
.feedback--wrong   { color: #d1635b; }
.feedback--timeout { color: var(--color-accent); }
</style>