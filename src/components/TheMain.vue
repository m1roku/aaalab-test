<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style>
.main {
  flex-grow: 1;
}
.main__controls {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 2rem;
  margin-bottom: 3.4375rem;
}
.main__pictures {
  margin-bottom: 9.375rem;
}
@media screen and (min-width: 900px) {
  .main__controls {
    flex-direction: row;
    align-items: center;
    margin-bottom: 6.4375rem;
  }
}
</style>
