<script lang="ts" setup>
import { useTemplateRef } from "vue";

const props = defineProps({
  context: Object,
});

const inputFieldEl = useTemplateRef("inputField");

function handleInput(e: Event) {
  props.context?.node.input((e.target as HTMLInputElement).value);
}

function focusInput() {
  inputFieldEl!.value!.focus();
}
</script>

<template>
  <input
    type="text"
    ref="inputField"
    @input="handleInput"
    :class="props.context?.classes.input"
    :id="props.context?.id"
    :name="props.context?.name"
    autocomplete="off"
    :value="props.context?._value"
  />
  <span
    v-if="props.context?.prefix"
    :class="props.context?.classes.prefix"
    @click="focusInput"
    >{{ props.context?.prefix }}</span
  >
  <span
    v-if="props.context?.suffix"
    :class="props.context?.classes.suffix"
    @click="focusInput"
    >{{ props.context?.suffix }}</span
  >
</template>
