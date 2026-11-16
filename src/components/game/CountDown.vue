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
  <div class="countdown-wrapper">
    <div class="countdown" :class="{ 'countdown--urgent': timeLeft <= 3 }">
      <span class="countdown__icon">⏱</span>
      <span class="countdown__digits">{{ timeLeft }} s</span>
    </div>
  </div>
</template>

<style scoped>
.countdown-wrapper {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 1.25rem;
}

.countdown {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 1.5rem;
  background: var(--ink-black, #141210);
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  color: var(--albero-gold, #F2A900);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
  transition: background-color 160ms ease, color 160ms ease;
}

.countdown__icon {
  font-size: 1.2rem;
  line-height: 1;
}

.countdown__digits {
  line-height: 1;
}

.countdown--urgent {
  background: var(--vermut-red, #D92B2B);
  color: #FFFFFF;
  border-color: var(--ink-black, #141210);
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
  animation: pulse-urgent 0.8s infinite alternate;
}

@keyframes pulse-urgent {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

@media (max-width: 600px) {
  .countdown-wrapper {
    margin: 0.35rem 0 0.55rem;
  }

  .countdown {
    padding: 0.3rem 1rem;
    font-size: 1.05rem;
    gap: 0.45rem;
    box-shadow: 3px 3px 0px var(--ink-black, #141210);
  }

  .countdown__icon {
    font-size: 1rem;
  }

  .countdown--urgent {
    box-shadow: 3px 3px 0px var(--ink-black, #141210);
  }
}

@media (prefers-reduced-motion: reduce) {
  .countdown--urgent {
    animation: none;
  }
}
</style>
