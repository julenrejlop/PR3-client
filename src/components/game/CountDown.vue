<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  seconds: { type: Number, default: 10 },
  stopped: { type: Boolean, default: false },   // true cuando el jugador ya ha respondido
})

const emit = defineEmits(['timeout'])

const timeLeft = ref(props.seconds)
let interval = null

onMounted(() => {
  // cada segundo restamos 1
  interval = setInterval(() => {
    timeLeft.value--

    if (timeLeft.value === 0) {
      clearInterval(interval)
      emit('timeout')   // avisamos al padre de que se acabó el tiempo
    }
  }, 1000)
})

// si el jugador responde, paramos el contador
watch(() => props.stopped, (value) => {
  if (value) clearInterval(interval)
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <p class="countdown">⏱ {{ timeLeft }} s</p>
</template>

<style scoped>
.countdown {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-accent);
}
</style>