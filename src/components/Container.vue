<script lang="ts" setup>
import { reactive } from "vue";
import Form from "./Form.vue";
import Output from "./Output.vue";
import type { CompleteFormData, FormData, RepaymentData } from "../types/types";
import { calculateMortgage } from "../utils/calculation";

const mortgageRepaymentData: RepaymentData = reactive({
  total: null,
  monthly: null,
});

function calculateRepayments(inputData: FormData): void {
  if (
    !inputData.amount ||
    !inputData.rate ||
    !inputData.term ||
    !inputData.type ||
    (inputData.type === "interest" && !inputData.ioterm)
  ) {
    return;
  } else {
    const { total, monthly } = calculateMortgage(inputData as CompleteFormData);

    mortgageRepaymentData.total = total;
    mortgageRepaymentData.monthly = monthly;
  }
}

function handleUpdate(data: FormData) {
  calculateRepayments(data);
}
</script>

<template>
  <main>
    <Form @update="handleUpdate" />
    <Output v-bind="mortgageRepaymentData" />
  </main>
</template>

<style scoped></style>
