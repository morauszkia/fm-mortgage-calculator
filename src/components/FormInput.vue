<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { stripInput, formatNumber } from "../utils/formatNumber";

const props = defineProps({
  context: Object,
});

const inputFieldEl = useTemplateRef("inputField");

function parseInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  props.context?.node.input(stripInput(value));
}

function handleInput(e: Event) {
  props.context?.node.input((e.target as HTMLInputElement).value);
}

function formatInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  const strippedValue = stripInput(value);
  strippedValue && props.context?.node.input(formatNumber(strippedValue));
}

function focusInput() {
  inputFieldEl!.value!.focus();
}
</script>

<template>
  <input
    type="text"
    ref="inputField"
    @focus="parseInput"
    @input="handleInput"
    @blur="formatInput"
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
