<script lang="ts" setup>
import type { MonthlyPaymentData } from "../types/types";
const props = defineProps<{
  total: number | null;
  monthly: MonthlyPaymentData | null;
}>();

import imgUrl from "../assets/images/illustration-empty.svg?url";
</script>

<template>
  <section v-if="total && monthly" class="results-container">
    <!-- Completed results -->
    <div class="results-header">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
    </div>
    <div class="results">
      <div v-if="!props.monthly?.interestOnlyMonthly">
        <p>Your monthly repayments</p>
        <p class="monthly">
          &pound;{{ props.monthly!.repaymentPeriodMonthly.toFixed(2) }}
        </p>
      </div>
      <div v-else>
        <p>Your monthly repayments</p>
        <p>Interest only period:</p>
        <p class="monthly small">
          &pound;{{ props.monthly!.interestOnlyMonthly.toFixed(2) }}
        </p>
        <p>After interest only period:</p>
        <p class="monthly small">
          &pound;{{ props.monthly!.repaymentPeriodMonthly.toFixed(2) }}
        </p>
      </div>
      <hr />
      <div>
        <p>Total you'll repay over the term</p>
        <p class="total">&pound;{{ props.total!.toFixed(2) }}</p>
      </div>
    </div>
  </section>

  <section v-else class="results-header">
    <!-- Empty results -->
    <img :src="imgUrl" alt="Calculation illustration" />
    <h2>Results shown here</h2>
    <p>
      Complete the form and click “calculate repayments” to see what your
      monthly repayments would be.
    </p>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: var(--padding-sm);
  background-color: var(--slate-900);
  color: var(--slate-300);
  font-size: var(--font-size-base);
  line-height: 1.5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: var(--white);
  line-height: 1.25;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.results-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.results-container {
  align-items: stretch;
  text-align: left;
  gap: 1.5rem;
}

.results {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 1.5rem 1rem;
  border-top: 4px solid var(--lime);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.monthly {
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
  color: var(--lime);
}

.monthly.small {
  font-size: var(--font-size-xl);
}

.total {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--white);
}
</style>
