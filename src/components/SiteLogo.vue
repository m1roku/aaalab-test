<template>
  <a class="logo" href="/">
    <img
      class="logo__image"
      :src="require(`@/assets/images/logo.svg`)"
      alt="pictures selling site"
    />
    <p class="logo__text">прекрасная Работа, <br />достойная каждого</p>
  </a>
</template>

<script>
export default {};
</script>

<style>
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo__image {
  margin-right: 1.5em;
}
.logo__text {
  display: none;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--text);
}
@media screen and (min-width: 450px) {
  .logo__text {
    display: block;
  }
}
</style>
