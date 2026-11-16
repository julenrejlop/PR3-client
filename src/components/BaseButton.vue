<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    to: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: 'button'
    }
})
</script>

<template>
  <!-- si tiene to-->
  <router-link v-if="to" :to="to" class="custom_button">
    {{ text }}
  </router-link>

  <!-- si  no tiene to -->
  <button v-else :type="type" class="custom_button">
    {{ text }}
  </button>
</template>

<style scoped>
.custom_button {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 2.2rem;
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  font-family: var(--font-sans, 'Space Grotesk', sans-serif);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #FFFFFF;
  background: var(--vermut-red, #D92B2B);
  box-shadow: 5px 5px 0px var(--ink-black, #141210);
  transition:
    transform 140ms ease,
    background-color 140ms ease,
    color 140ms ease,
    box-shadow 140ms ease;
}

.custom_button:hover {
  background: var(--albero-gold, #F2A900);
  color: var(--ink-black, #141210);
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px var(--ink-black, #141210);
}

.custom_button:active {
  transform: translate(5px, 5px);
  box-shadow: 0px 0px 0px var(--ink-black, #141210);
}

.custom_button:focus-visible {
  outline: 3px solid var(--ink-black, #141210);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .custom_button {
    transition: none;
  }
  .custom_button:hover {
    transform: none;
  }
}
</style>
