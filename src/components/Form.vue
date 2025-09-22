<script lang="ts" setup>
import { ref } from "vue";
import { createInput } from "@formkit/vue";
import FormInput from "./FormInput.vue";

const formData = ref({
  amount: null,
  term: null,
  rate: null,
  type: null,
  ioterm: null,
});

const mortgageInput = createInput(FormInput, { props: ["prefix", "suffix"] });
</script>

<template>
  <FormKit
    type="form"
    submit-label="Calculate Repayments"
    v-model="formData"
    @submit="
      () => {
        console.log('Submitting...');
      }
    "
  >
    <h1>Mortgage Calculator</h1>
    <FormKit type="button" id="clear" label="Clear All" />
    <FormKit
      :type="mortgageInput"
      label="Mortgage Amount"
      name="amount"
      prefix="£"
    />
    <FormKit
      :type="mortgageInput"
      label="Mortgage Term"
      name="term"
      suffix="years"
    />
    <FormKit
      :type="mortgageInput"
      label="Interest Rate"
      name="rate"
      suffix="%"
    />
    <FormKit
      type="radio"
      label="Mortgage Type"
      :options="{ repayment: 'Repayment', interest: 'Interest only' }"
      name="type"
    />
    <FormKit
      v-if="formData?.type === 'interest'"
      :type="mortgageInput"
      label="Interest Only Term"
      name="ioterm"
      suffix="years"
    />
  </FormKit>
</template>

<style scoped></style>
