<script lang="ts" setup></script>

<template>
  <form>
    <h1>Mortgage Calculator</h1>
    <button type="reset">Clear All</button>
    <div>
      <label for="amount">Mortgage Amount</label
      ><input type="number" id="amount" />
    </div>
    <div>
      <label for="term">Mortgage Term</label><input type="number" id="term" />
    </div>
    <div>
      <label for="rate">Interest Rate</label><input type="number" id="rate" />
    </div>
    <div>
      <label for="type">Mortgage Type</label>
      <input type="radio" name="type" id="repayment" /><label for="repayment"
        >Repayment</label
      >
      <input type="radio" name="type" id="interest" /><label for="interest"
        >Interest Only</label
      >
    </div>
    <button type="submit">Calculate Repayments</button>
  </form>
</template>

<style scoped></style>
