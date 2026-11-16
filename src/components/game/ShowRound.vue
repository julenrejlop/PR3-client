<script setup>
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore()
</script>

<template>
    <div class="round-display">
        <span class="round-display__icon">♫</span>
        <p>RONDA <strong>{{ gameStore.currentRound }}</strong> / {{ gameStore.totalRounds }}</p>
    </div>
</template>

<style scoped>
.round-display {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.95rem;
  background: var(--albero-gold, #F2A900);
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  box-shadow: 2.5px 2.5px 0px var(--ink-black, #141210);
  color: var(--ink-black, #141210);
}

.round-display__icon {
  font-size: 1rem;
  line-height: 1;
  font-weight: 800;
}

.round-display p {
  margin: 0;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.round-display strong {
  font-size: 1.05rem;
  font-weight: 800;
}

@media (max-width: 600px) {
  .round-display {
    padding: 0.25rem 0.5rem;
    gap: 0.25rem;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
    border-width: 1.5px;
  }

  .round-display__icon {
    font-size: 0.75rem;
  }

  .round-display p {
    font-size: 0.72rem;
    letter-spacing: 0.02em;
  }

  .round-display strong {
    font-size: 0.85rem;
  }
}
</style>
