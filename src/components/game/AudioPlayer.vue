<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { Howl } from 'howler'

const props = defineProps({
  file: { type: String, required: true },
  answered: { type: Boolean, default: false },
})

const clipSeconds = 5
let sound = null
let timer = null

onMounted(() => {
  sound = new Howl({
    src: [props.file],
    onload: () => {
      if (props.answered) return
      const start = Math.random() * (sound.duration() - clipSeconds)
      sound.seek(start)
      sound.play()
      timer = setTimeout(() => sound.stop(), clipSeconds * 1000)
    },
  })
})

// parar canción al responder
watch(() => props.answered, (value) => {
  if (value) {
    clearTimeout(timer)
    sound.stop()
  }
})

// liberar audio al salir de la pregunta
onBeforeUnmount(() => {
  clearTimeout(timer)
  sound.unload()
})
</script>

<template>
  <div class="audio-player" :class="{ 'audio-player--playing': !answered }">
    <div class="audio-player__turntable">
      <div class="audio-player__disc">
        <!-- vinilo -->
        <div class="audio-player__label">
          <span class="audio-player__center-hole"></span>
          <span class="audio-player__icon">♫</span>
          <span class="audio-player__rpm">45 RPM</span>
        </div>
      </div>
    </div>

    <div class="audio-player__status-badge">
      <p class="audio-player__text">{{ answered ? 'Fragmento pausado' : 'Escuchando fragmento…' }}</p>
    </div>
  </div>
</template>

<style scoped>
.audio-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.35rem;
}

.audio-player__turntable {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}

/* Vinilo de 7 pulgadas (Single Español) - Perfectamente redondo sin sombras excéntricas que dupliquen el disco */
.audio-player__disc {
  position: relative;
  width: 116px;
  height: 116px;
  min-width: 116px;
  min-height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: repeating-radial-gradient(
    circle at center,
    #141210 0,
    #141210 2px,
    #2a2723 3px,
    #141210 4px
  );
  border: 3px solid var(--ink-black, #141210);
  box-shadow: none;
  transform-origin: center center;
  transition: opacity 0.25s ease;
}

/* Galleta central clásica española de discográfica */
.audio-player__label {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--vermut-red, #D92B2B);
  border: 2px solid var(--ink-black, #141210);
  color: #FFFFFF;
  outline: 2px solid var(--albero-gold, #F2A900);
  outline-offset: -4px;
}

.audio-player__center-hole {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bg-paper, #F6F2EA);
  border: 1.5px solid var(--ink-black, #141210);
  z-index: 2;
}

.audio-player__icon {
  font-size: 1.1rem;
  line-height: 1;
  color: #FFFDF9;
  z-index: 1;
}

.audio-player__rpm {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 6px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--albero-gold, #F2A900);
  z-index: 1;
  margin-top: 1px;
}

/* Animación de giro analógico mientras suena */
.audio-player--playing .audio-player__disc {
  animation: spin-vinyl 3.5s linear infinite;
}

@keyframes spin-vinyl {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Etiqueta / chapa rectangular para el estado */
.audio-player__status-badge {
  display: inline-block;
  padding: 4px 14px;
  background: var(--surface-card, #FFFDF9);
  border: 2px solid var(--ink-black, #141210);
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
}

.audio-player__text {
  margin: 0;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--ink-black, #141210);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .audio-player {
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .audio-player__turntable {
    padding: 0;
  }

  .audio-player__disc {
    width: 108px;
    height: 108px;
    min-width: 108px;
    min-height: 108px;
    border-width: 2.5px;
  }

  .audio-player__label {
    width: 46px;
    height: 46px;
    border-width: 1.5px;
    outline-width: 1.5px;
    outline-offset: -4px;
  }

  .audio-player__center-hole {
    width: 8px;
    height: 8px;
    border-width: 1.5px;
  }

  .audio-player__icon {
    font-size: 1rem;
  }

  .audio-player__rpm {
    font-size: 5.5px;
  }

  .audio-player__status-badge {
    padding: 3px 12px;
    border-width: 2px;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
  }

  .audio-player__text {
    font-size: 0.76rem;
    letter-spacing: 0.05em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .audio-player--playing .audio-player__disc {
    animation: none;
  }
}
</style>
