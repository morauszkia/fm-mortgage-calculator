<script lang="ts" setup>
interface Props {
  id: string;
  label: string;
  unit: string;
  wide?: boolean;
}

const { id, label, unit, wide = false } = defineProps<Props>();

const value = defineModel();
</script>

<template>
  <div :class="`form-control ${wide ? 'wide' : ''}`">
    <label :for="id">{{ label }}</label>
    <div class="input">
      <p :class="`unit ${unit === '&pound;' ? 'start' : ''}`">{{ unit }}</p>
      <input type="text" inputmode="numeric" :id v-model="value" />
    </div>
  </div>
</template>

<style scoped></style>
