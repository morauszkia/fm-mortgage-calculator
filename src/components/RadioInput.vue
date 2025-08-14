<script lang="ts" setup>
interface Props {
  id: string;
  title: string;
  options: { id: string; label: string }[];
}

const { id, title, options } = defineProps<Props>();
</script>

<template>
  <div>
    <label :for="id">{{ title }}</label>
    <div class="option" v-for="option in options">
      <input type="radio" :name="id" :id="option.id" /><label for="repayment">{{
        option.label
      }}</label>
    </div>
  </div>
</template>

<style scoped></style>
