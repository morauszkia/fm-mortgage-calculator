<script lang="ts" setup>
const props = defineProps({
  context: Object,
});

function handleInput(e: Event) {
  props.context?.node.input((e.target as HTMLInputElement).value);
}
</script>

<template>
  <span v-if="props.context?.prefix" :class="props.context?.classes.prefix">{{
    props.context?.prefix
  }}</span>
  <input
    type="text"
    @input="handleInput"
    :class="props.context?.classes.input"
    :id="props.context?.id"
    :name="props.context?.name"
  />
  <span v-if="props.context?.suffix" :class="props.context?.classes.suffix">{{
    props.context?.suffix
  }}</span>
</template>
