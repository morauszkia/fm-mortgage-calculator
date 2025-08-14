<script lang="ts" setup>
import SubmitButton from "./SubmitButton.vue";
import ClearButton from "./ClearButton.vue";
import FormInput from "./FormInput.vue";
import RadioInput from "./RadioInput.vue";

type InputData = {
  id: string;
  label: string;
  unit: string;
  wide?: boolean;
};

type RadioOption = {
  id: string;
  label: string;
};

const inputs: InputData[] = [
  {
    id: "amount",
    label: "Mortgage Amount",
    unit: "£",
    wide: true,
  },
  {
    id: "term",
    label: "Mortgage Term",
    unit: "years",
  },
  {
    id: "rate",
    label: "Interest Rate",
    unit: "%",
  },
];

const radioOptions: RadioOption[] = [
  {
    id: "repayment",
    label: "Repayment",
  },
  {
    id: "interest",
    label: "Interest Only",
  },
];
</script>

<template>
  <form>
    <h1>Mortgage Calculator</h1>
    <ClearButton />
    <FormInput
      v-for="input in inputs"
      :id="input.id"
      :label="input.label"
      :unit="input.unit"
      :wide="input.wide"
    />
    <RadioInput id="type" title="Mortgage Type" :options="radioOptions" />
    <SubmitButton />
  </form>
</template>

<style scoped></style>
