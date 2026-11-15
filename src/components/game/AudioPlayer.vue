<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'   // watch vigila
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
      if (props.answered) return   // respondido no suena
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
  <div class="audio-player">
    <span class="audio-player__icon">♫</span>
    <p>Escuchando…</p>
  </div>
</template>



<style scoped>
.audio-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-secondary);
}
.audio-player__icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 2rem;
}
</style>