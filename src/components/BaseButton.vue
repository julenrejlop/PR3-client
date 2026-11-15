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


<style scoped></style>