<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { createInput, reset } from "@formkit/vue";
import FormInput from "./FormInput.vue";
import type { FormData } from "../types/types";
import calculatorSvg from "../assets/images/icon-calculator.svg?raw";

const initialFormData: FormData = {
  amount: undefined,
  term: undefined,
  rate: undefined,
  type: undefined,
  ioterm: undefined,
};

const formData: Ref<FormData> = ref(initialFormData);

const mortgageInput = createInput(FormInput, {
  props: ["prefix", "suffix"],
});
</script>

<template>
  <FormKit
    type="form"
    id="mortgage-form"
    submit-label="Calculate Repayments"
    :submit-attrs="{
      prefixIcon: calculatorSvg,
    }"
    v-model="formData"
    :value="initialFormData"
    @submit="
      (data) => {
        $emit('update', data);
      }
    "
  >
    <div class="header">
      <h1>Mortgage Calculator</h1>
      <FormKit
        type="button"
        label="Clear All"
        @click="reset('mortgage-form')"
      />
    </div>
    <FormKit
      :type="mortgageInput"
      label="Mortgage Amount"
      name="amount"
      id="amount"
      prefix="£"
      validation="required:trim|number|min:1"
    />
    <FormKit
      :type="mortgageInput"
      label="Mortgage Term"
      name="term"
      id="term"
      suffix="years"
      validation="required:trim|number|min:1"
    />
    <FormKit
      :type="mortgageInput"
      label="Interest Rate"
      name="rate"
      id="rate"
      suffix="%"
      validation="required:trim|number"
    />
    <FormKit
      type="radio"
      label="Mortgage Type"
      :options="{ repayment: 'Repayment', interest: 'Interest only' }"
      name="type"
      validation="required"
    />
    <FormKit
      v-if="formData.type === 'interest'"
      :type="mortgageInput"
      label="Interest Only Term"
      name="ioterm"
      id="ioterm"
      suffix="years"
      validation="required:trim|number|min:1"
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
