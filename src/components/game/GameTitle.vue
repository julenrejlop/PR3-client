<template>
  <h2 class="game-title">Demuestra cuánto sabes de música española</h2>
</template>

<style scoped>
.game-title {
  text-align: center;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--ink-black, #141210);
  margin: 0 auto 0.45rem;
  max-width: 640px;
  line-height: 1.15;
}

@media (max-width: 600px) {
  .game-title {
    font-size: 1.15rem;
    margin: 0 auto 0.55rem;
  }
}
</style>
