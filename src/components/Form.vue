<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { createInput } from "@formkit/vue";
import FormInput from "./FormInput.vue";
import type { FormData } from "../types/types";
import calculatorSvg from "../assets/images/icon-calculator.svg?raw";

const formData: Ref<FormData> = ref({
  amount: undefined,
  term: undefined,
  rate: undefined,
  type: undefined,
  ioterm: undefined,
});

const mortgageInput = createInput(FormInput, {
  props: ["prefix", "suffix"],
});
</script>

<template>
  <FormKit
    type="form"
    submit-label="Calculate Repayments"
    :submit-attrs="{
      prefixIcon: calculatorSvg,
    }"
    v-model="formData"
    @submit="$emit('update', formData)"
  >
    <div class="header">
      <h1>Mortgage Calculator</h1>
      <FormKit type="button" label="Clear All" />
    </div>
    <FormKit
      :type="mortgageInput"
      label="Mortgage Amount"
      name="amount"
      id="amount"
      prefix="£"
    />
    <FormKit
      :type="mortgageInput"
      label="Mortgage Term"
      name="term"
      id="term"
      suffix="years"
    />
    <FormKit
      :type="mortgageInput"
      label="Interest Rate"
      name="rate"
      id="rate"
      suffix="%"
    />
    <FormKit
      type="radio"
      label="Mortgage Type"
      :options="{ repayment: 'Repayment', interest: 'Interest only' }"
      name="type"
    />
    <FormKit
      v-if="formData.type === 'interest'"
      :type="mortgageInput"
      label="Interest Only Term"
      name="ioterm"
      id="ioterm"
      suffix="years"
    />
  </FormKit>
</template>

<style scoped>
form {
  padding: var(--padding-sm);
  background-color: var(--white);
  color: var(--slate-700);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h1 {
  color: var(--slate-900);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  line-height: 1.25;
  margin-bottom: 0.5rem;
}
</style>
