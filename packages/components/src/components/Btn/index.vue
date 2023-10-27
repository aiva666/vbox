<script setup lang="ts">
defineOptions({
  name: 'AivaBtn'
})
defineProps<{
  text: string
}>()
</script>
<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  border: 1px solid var(--aiva-border-color);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
