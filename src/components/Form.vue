<script lang="ts" setup>
import { ref, Transition, type Ref } from "vue";
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
    :actions="false"
    :incomplete-message="false"
    v-model="formData"
    :value="initialFormData"
    @submit="
      (data) => {
        $emit('update', data);
      }
    "
  >
    <header class="header wide">
      <h1>Mortgage Calculator</h1>
      <FormKit
        type="button"
        label="Clear All"
        @click="reset('mortgage-form')"
      />
    </header>
    <section class="inputs">
      <FormKit
        :type="mortgageInput"
        label="Mortgage Amount"
        name="amount"
        id="amount"
        prefix="£"
        validation="required:trim"
        outer-class="wide"
        :validation-messages="{
          required: 'This field is required',
        }"
      />
      <FormKit
        :type="mortgageInput"
        label="Mortgage Term"
        name="term"
        id="term"
        suffix="years"
        validation="required:trim|number|min:1"
        :validation-messages="{
          required: 'This field is required',
          number: 'Please enter a valid number',
        }"
      />
      <FormKit
        :type="mortgageInput"
        label="Interest Rate"
        name="rate"
        id="rate"
        suffix="%"
        validation="required:trim|number|min:0.01|max:100"
        :validation-messages="{
          required: 'This field is required',
          number: 'Please enter a valid percentage',
        }"
      />
      <FormKit
        type="radio"
        label="Mortgage Type"
        :options="{ repayment: 'Repayment', interest: 'Interest only' }"
        name="type"
        validation="required"
        outer-class="wide"
        :validation-messages="{
          required: 'This field is required',
        }"
      />
      <Transition>
        <FormKit
          v-if="formData.type === 'interest'"
          :type="mortgageInput"
          label="Interest Only Term"
          name="ioterm"
          id="ioterm"
          suffix="years"
          validation="required:trim|number|min:1"
          :validation-messages="{
            required: 'This field is required',
            number: 'Please enter a valid number',
          }"
          outer-class="wide"
        />
      </Transition>
    </section>
    <FormKit
      type="submit"
      label="Calculate Repayments"
      :prefix-icon="calculatorSvg"
      outer-class="wide"
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

.inputs {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;
}

.v-enter-active,
.v-leave-from {
  transition: all 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
}

@media screen and (min-width: 40rem) {
  form {
    padding: var(--padding-md);
  }

  form {
    gap: 2.5rem;
  }

  .inputs {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }

  .wide {
    grid-column: span 2;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
