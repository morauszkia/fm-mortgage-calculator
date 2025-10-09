<script lang="ts" setup>
import type { MonthlyPaymentData } from "../types/types";
const props = defineProps<{
  total: number | null;
  monthly: MonthlyPaymentData | null;
}>();
</script>

<template>
  <section v-if="total && monthly">
    <!-- Completed results -->
    <h2>Your results</h2>
    <p>
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div v-if="!props.monthly?.interestOnlyMonthly">
      <p>Your monthly repayments</p>
      <p>&pound;{{ props.monthly!.repaymentPeriodMonthly.toFixed(2) }}</p>
    </div>
    <div v-else>
      <p>Your monthly repayments</p>
      <p>
        Interest only period: &pound;{{
          props.monthly!.interestOnlyMonthly.toFixed(2)
        }}
      </p>
      <p>
        After interest only period: &pound;{{
          props.monthly!.repaymentPeriodMonthly.toFixed(2)
        }}
      </p>
    </div>
    <div>
      <p>Total you'll repay over the term</p>
      <p>&pound;{{ props.total!.toFixed(2) }}</p>
    </div>
  </section>

  <section v-else>
    <!-- Empty results -->
    <h2>Results shown here</h2>
    <p>
      Complete the form and click “calculate repayments” to see what your
      monthly repayments would be.
    </p>
  </section>
</template>

<style scoped></style>
