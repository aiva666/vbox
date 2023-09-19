<script setup lang="ts">
defineOptions({
  name: 'AivaBtn'
})
</script>
<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  border: 1px solid var(--aiva-border-color);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
