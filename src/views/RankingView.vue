<script setup>
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <main class="ranking-view">
    <div class="ranking-container">
      <div class="ranking-header">
        <span class="ranking-badge">🏆</span>
        <h1>Ranking</h1>
        <p class="ranking-subtitle">Clasificación de los mejores oídos musicales</p>
      </div>

      <section class="ranking-card">
        <div class="ranking-card__top-stripe">
          ★ CUADRO DE HONOR NACIONAL • EDICIÓN OFICIAL ★
        </div>

        <div class="ranking-card__inner">
          <div class="ranking-empty">
            <span class="ranking-empty__icon">♫</span>
            <h3>Tabla en preparación</h3>
            <p>Muy pronto podrás registrar tus mejores puntuaciones y competir con los grandes conocedores del repertorio nacional.</p>
          </div>

          <div class="ranking-actions">
            <BaseButton text="Saludar" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.ranking-view {
  min-height: calc(100vh - 74px);
  padding: clamp(2rem, 5vw, 4rem) 1rem;
  background-color: var(--bg-paper, #F6F2EA);
  background-image: radial-gradient(var(--ink-black, #141210) 0.75px, transparent 0.75px);
  background-size: 24px 24px;
}

.ranking-container {
  width: min(100%, 720px);
  margin: 0 auto;
}

.ranking-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.ranking-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  border-radius: 0px;
  background: var(--albero-gold, #F2A900);
  border: 2px solid var(--ink-black, #141210);
  font-size: 2rem;
  box-shadow: 4px 4px 0px var(--ink-black, #141210);
}

.ranking-header h1 {
  margin: 0;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--ink-black, #141210);
}

.ranking-subtitle {
  margin: 0.6rem 0 0;
  color: #55504A;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Tarjeta / Cartel de Ranking */
.ranking-card {
  background: var(--surface-card, #FFFDF9);
  border: 3px solid var(--ink-black, #141210);
  border-radius: 0px;
  text-align: center;
  box-shadow: 8px 8px 0px var(--ink-black, #141210);
  overflow: hidden;
}

.ranking-card__top-stripe {
  background: var(--ink-black, #141210);
  color: var(--albero-gold, #F2A900);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.55rem 1rem;
  text-align: center;
  border-bottom: 2px solid var(--ink-black, #141210);
  text-transform: uppercase;
}

.ranking-card__inner {
  margin: 8px;
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 2.5rem);
  border: 1.5px solid var(--ink-black, #141210);
  background: var(--surface-card, #FFFDF9);
}

.ranking-empty {
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
  border: 2px dashed var(--ink-black, #141210);
  background: #FAF6EE;
}

.ranking-empty__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 0px;
  background: var(--vermut-red, #D92B2B);
  color: #FFFFFF;
  border: 2px solid var(--ink-black, #141210);
  box-shadow: 3px 3px 0px var(--ink-black, #141210);
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
}

.ranking-empty h3 {
  margin: 0 0 0.6rem;
  font-family: var(--font-display, 'Fraunces', serif);
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--ink-black, #141210);
}

.ranking-empty p {
  margin: 0;
  color: #55504A;
  font-family: var(--font-sans, 'Space Grotesk', sans-serif);
  font-size: 1rem;
  line-height: 1.55;
  font-weight: 500;
  max-width: 480px;
  margin: 0 auto;
}

.ranking-actions {
  display: flex;
  justify-content: center;
}

@media (max-width: 580px) {
  .ranking-card__inner {
    margin: 5px;
    padding: 1.5rem 1rem;
  }

  .ranking-empty {
    padding: 1.5rem 1rem;
  }
}
</style>
