<script setup>
import AudioPlayer from './AudioPlayer.vue';


const props = defineProps({
  question: { type: Object, required: true },
  selected: { type: String, default: null },
})

const emit = defineEmits(['select'])

const letters = ['A','B','C','D']

//css  segun estado de la pregunta
function optionClass(option) {
  if (props.selected === null) return ''
  if (option === props.question.correct) return 'option--correct'
  if (option === props.selected) return 'option--wrong'
  return 'option--dim'
}

</script>


<template>
  <section class="question-card">
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
          <span>{{ option }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>


<style scoped>
.question-card {
  width: 100%;
  max-width: 560px;
  margin: 1.5rem auto;
  padding: 2rem;
  background: var(--color-surface);
  border-radius: 18px;
  color: var(--color-text);
}
.question-card__player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-secondary);
}
.question-card__icon {
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
.question-card__title {
  margin: 1.5rem 0 1rem;
  text-align: center;
  font-family: var(--font-display);
}
.question-card__options {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}
.option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1rem;
  text-align: left;
  font: inherit;
  color: var(--color-text);
  background: var(--color-bg);
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.option:hover:not(:disabled) { border-color: var(--color-accent); }
.option:disabled { cursor: default; }
.option__letter {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(182, 141, 64, 0.2);
  color: var(--color-accent);
  font-weight: 700;
}
.option--correct { background: #2f7d52; border-color: #4fb37c; }
.option--wrong   { background: #9b3b35; border-color: #d1635b; }
.option--dim     { opacity: 0.45; }

@media (max-width: 480px) {
  .question-card__options { grid-template-columns: 1fr; }
}
</style>