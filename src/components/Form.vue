<script lang="ts" setup>
import { ref } from "vue";
import { createInput } from "@formkit/vue";
import FormInput from "./FormInput.vue";

const formData = ref({});

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
  </FormKit>
  <pre wrap>{{ formData }}</pre>
</template>

<style scoped></style>
