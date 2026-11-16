<script setup>
import AudioPlayer from './AudioPlayer.vue';

const props = defineProps({
  question: { type: Object, required: true },
  selected: { type: String, default: null },
})

const emit = defineEmits(['select'])

const letters = ['A','B','C','D']

//css segun estado de la pregunta
function optionClass(option) {
  if (props.selected === null) return ''
  if (option === props.question.correct) return 'option--correct'
  if (option === props.selected) return 'option--wrong'
  return 'option--dim'
}
</script>

<template>
  <section class="question-card">
    <div class="question-card__inner">
      <AudioPlayer :file="question.file" :answered="selected !== null" />
      <h3 class="question-card__title">¿Qué canción es?</h3>

      <ul class="question-card__options">
        <li v-for="(option, i) in question.options" :key="option">
          <button
            class="option"
            :class="optionClass(option)"
            :disabled="selected !== null"
            @click="emit('select', option)"
          >
            <span class="option__letter">{{ letters[i] }}</span>
            <span class="option__text">{{ option }}</span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.question-card {
  width: 100%;
  max-width: 660px;
  margin: 1.5rem auto;
  padding: 0;
  background: var(--surface-card, #FFFDF9);
  border: 3px solid var(--ink-black, #141210);
  border-radius: 0px;
  box-shadow: 8px 8px 0px var(--ink-black, #141210);
  overflow: hidden;
}

.question-card__inner {
  margin: 8px;
  padding: clamp(1.75rem, 5vw, 2.5rem) clamp(1.2rem, 4vw, 2.25rem);
  border: 1.5px solid var(--ink-black, #141210);
  background: var(--surface-card, #FFFDF9);
}

.question-card__title {
  margin: 1.25rem 0 1.75rem;
  text-align: center;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  color: var(--ink-black, #141210);
}

.question-card__options {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
  padding: 0;
  margin: 0;
}

/* Botón rectangular brutalista */
.option {
  width: 100%;
  min-height: 3.75rem;
  display: flex;
  align-items: stretch;
  padding: 0;
  text-align: left;
  font: inherit;
  color: var(--ink-black, #141210);
  background: #FFFFFF;
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  cursor: pointer;
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
  transition:
    transform 140ms ease,
    background-color 140ms ease,
    box-shadow 140ms ease;
  overflow: hidden;
}

/* Efecto hover: se desplaza, la sombra crece y fondo crema cálido */
.option:hover:not(:disabled) {
  background: #FFF8DF;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--ink-black, #141210);
}

.option:active:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px var(--ink-black, #141210);
}

.option:disabled {
  cursor: default;
}

/* Recuadro cuadrado a la izquierda con letra en negrita */
.option__letter {
  flex-shrink: 0;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  background: var(--albero-gold, #F2A900);
  color: var(--ink-black, #141210);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 1.15rem;
  font-weight: 800;
  transition: background-color 140ms, color 140ms;
}

.option__text {
  flex: 1;
  padding: 0.85rem 1rem;
  font-family: var(--font-sans, 'Space Grotesk', sans-serif);
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.35;
  display: flex;
  align-items: center;
}

/* Estado de Respuesta Correcta: Verde Oliva Neón */
.option--correct {
  background: var(--verde-oliva-neon, #A3E635) !important;
  color: var(--ink-black, #141210) !important;
  border: 2px solid var(--ink-black, #141210) !important;
  box-shadow: 4px 4px 0px var(--ink-black, #141210) !important;
}

.option--correct .option__letter {
  background: var(--ink-black, #141210);
  color: var(--verde-oliva-neon, #A3E635);
  border-right-color: var(--ink-black, #141210);
}

/* Estado de Respuesta Incorrecta: Rojo Vermut */
.option--wrong {
  background: var(--vermut-red, #D92B2B) !important;
  color: #FFFFFF !important;
  border: 2px solid var(--ink-black, #141210) !important;
  box-shadow: 4px 4px 0px var(--ink-black, #141210) !important;
}

.option--wrong .option__letter {
  background: var(--ink-black, #141210);
  color: #FFFFFF;
  border-right-color: var(--ink-black, #141210);
}

.option--wrong .option__text {
  color: #FFFFFF;
}

/* Estado Atenuado */
.option--dim {
  opacity: 0.45;
  background: #EFE9DE !important;
  border-color: #8C847A !important;
  box-shadow: none !important;
}

.option--dim .option__letter {
  background: #DFD7C9;
  border-right-color: #8C847A;
  color: #7A7268;
}

@media (max-width: 620px) {
  .question-card {
    margin: 0.5rem auto 0.75rem;
    box-shadow: 5px 5px 0px var(--ink-black, #141210);
  }

  .question-card__inner {
    margin: 4px;
    padding: 0.9rem 0.75rem 1.1rem;
  }

  .question-card__title {
    margin: 0.5rem 0 0.75rem;
    font-size: 1.25rem;
  }

  .question-card__options {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }

  .option {
    min-height: 3.15rem;
    box-shadow: 3px 3px 0px var(--ink-black, #141210);
  }

  .option__letter {
    width: 40px;
    font-size: 1.05rem;
  }

  .option__text {
    padding: 0.55rem 0.8rem;
    font-size: 0.92rem;
    line-height: 1.3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .option:hover:not(:disabled) {
    transform: none;
  }
}
</style>
