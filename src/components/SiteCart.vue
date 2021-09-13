<template>
  <div class="cart">
    <BaseIcon name="cart" :iconClasses="['cart__icon']" />
    <p class="cart__text">Корзина</p>
    <span class="cart__counter">{{ cartCounter }}</span>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseIcon,
  },
  computed: mapGetters(["cartCounter"]),
};
</script>

<style>
.cart {
  display: flex;
  align-items: center;
}
.cart__text {
  display: none;
  margin-right: 0.25rem;
  font-size: 0.825rem;
  text-transform: uppercase;
}
.cart__icon {
  width: 20px;
  height: 24px;
  margin-right: 0.75rem;
  fill: none;
}
.cart__counter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  line-height: 1;
  color: var(--text-invert);
  background-color: var(--bg-invert);
  border-radius: 100%;
}
@media screen and (min-width: 450px) {
  .cart__text {
    display: block;
  }
}
</style>
