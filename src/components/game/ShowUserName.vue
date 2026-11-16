<script setup>
defineProps({
    username: String
})
</script>

<template>
    <div class="user-badge">
        <span class="user-badge__label">JUGADOR:</span>
        <h3 class="user-badge__name">{{ username }}</h3>
    </div>
</template>

<style scoped>
.user-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.95rem;
  background: var(--surface-card, #FFFDF9);
  border: 2px solid var(--ink-black, #141210);
  border-radius: 0px;
  box-shadow: 2.5px 2.5px 0px var(--ink-black, #141210);
}

.user-badge__label {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.75rem;
  font-weight: 800;
  color: #5A544C;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.user-badge__name {
  margin: 0;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--ink-black, #141210);
}

@media (max-width: 600px) {
  .user-badge {
    padding: 0.25rem 0.5rem;
    gap: 0.25rem;
    box-shadow: 2px 2px 0px var(--ink-black, #141210);
    border-width: 1.5px;
  }

  .user-badge__label {
    font-size: 0.65rem;
    letter-spacing: 0.04em;
  }

  .user-badge__name {
    font-size: 0.8rem;
    max-width: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
