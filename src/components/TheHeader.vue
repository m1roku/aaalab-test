<template>
  <header class="header">
    <SiteLogo />
    <SiteCart />
  </header>
</template>

<script>
import SiteLogo from "@/components/SiteLogo";
import SiteCart from "@/components/SiteCart";
export default {
  components: {
    SiteLogo,
    SiteCart,
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.25rem 1rem 5.625rem;
}
@media screen and (min-width: 1600px) {
  .header {
    padding: 3.25rem 5.625rem 5rem;
  }
}
</style>
