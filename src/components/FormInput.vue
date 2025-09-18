<script lang="ts" setup>
const props = defineProps({
  context: Object,
});

function handleInput(e: Event) {
  props.context?.node.input((e.target as HTMLInputElement).value);
}
</script>

<template>
  <div>
    <span v-if="props.context?.prefix">{{ props.context?.prefix }}</span>
    <input type="text" @input="handleInput" />
    <span v-if="props.context?.suffix">{{ props.context?.suffix }}</span>
  </div>
</template>
