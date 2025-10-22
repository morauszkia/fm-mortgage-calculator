<template>
  <footer class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
    Coded by <a href="https://github.com/morauszkia">mantis</a>.
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--slate-900);
  color: var(--slate-100);
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  text-align: center;
  a {
    color: var(--slate-700);
    font-weight: var(--font-weight-bold);
  }
}

@media (min-width: 40rem) {
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--slate-100);
    color: var(--slate-900);
  }
}
</style>
