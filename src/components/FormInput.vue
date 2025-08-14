<script lang="ts" setup>
interface Props {
  id: string;
  label: string;
  unit: string;
  wide?: boolean;
}

const { id, label, unit, wide = false } = defineProps<Props>();
</script>

<template>
  <div :class="`form-control ${wide ? 'wide' : ''}`" >
    <label :for="id">{{ label }}</label>
    <div class="input">
      <p :class="`unit ${unit === '&pound;' ? 'start' : ''}`">{{ unit }}</p>
      <input type="number" :id />
    </div>
  </div>
</template>

<style scoped></style>
