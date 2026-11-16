<script setup>
defineProps({
    points: Number
})
</script>

<template>
    <div class="points-badge">
        <span class="points-badge__icon">★</span>
        <h2 class="points-badge__text">PUNTOS: <strong>{{ points }}</strong></h2>
    </div>
</template>

<style scoped>
.points-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.95rem;
  background: var(--surface-card, #FFFDF9);
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  box-shadow: 2.5px 2.5px 0px var(--ink-black, #141210);
}

.points-badge__icon {
  color: var(--vermut-red, #D92B2B);
  font-size: 1.1rem;
  line-height: 1;
}

.points-badge__text {
  margin: 0;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-black, #141210);
}

.points-badge__text strong {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--vermut-red, #D92B2B);
}

@media (max-width: 600px) {
  .points-badge {
    padding: 0.25rem 0.5rem;
    gap: 0.25rem;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
    border-width: 1.5px;
  }

  .points-badge__icon {
    font-size: 0.85rem;
  }

  .points-badge__text {
    font-size: 0.72rem;
    letter-spacing: 0.02em;
  }

  .points-badge__text strong {
    font-size: 0.85rem;
  }
}
</style>
