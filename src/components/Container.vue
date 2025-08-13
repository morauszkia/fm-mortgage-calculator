<script lang="ts" setup></script>

<template>
  <main>
    <h1>Mortgage Calculator</h1>
    <button type="reset">Clear All</button>
    <form>
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
    <section>
      <!-- Empty results -->
      <h2>Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>

      <!-- Completed results -->
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div>
        <p>Your monthly repayments</p>
        <p>&pound;1,797.74</p>
      </div>
      <div>
        <p>Total you'll repay over the term</p>
        <p>&pound;539,322.94</p>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
