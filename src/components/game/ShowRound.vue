<script setup>
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore()
</script>

<template>
    <div class="round-display">
        <p>Ronda actual: {{ gameStore.currentRound }} / {{ gameStore.totalRounds }}</p>
    </div>

</template>

