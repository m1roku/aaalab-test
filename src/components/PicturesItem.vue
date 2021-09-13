<template>
  <div :class="classes">
    <BaseImage :name="picture.preview" extension="jpg" :alt="picture.name" />
    <div class="picture__layout">
      <div class="picture__body">
        <p class="picture__name">{{ picture.name }}</p>
        <p class="picture__painter">{{ picture.painter }}</p>
      </div>
      <p class="picture__sold-message" v-if="picture.status === 'sold'">
        <BaseIcon name="sold" :iconClasses="['picture__sold-icon']" />
        Продано на аукционе
      </p>
      <div class="picture__footer" v-else>
        <div class="picture__prices">
          <p class="picture__old-price" v-if="picture.prices.old !== '0'">
            {{ formattedPriceOld }} $
          </p>
          <p class="picture__current-price">{{ formattedPriceCurrent }} $</p>
        </div>
        <button
          :class="pictureBuyBtnClasses"
          @click="onBuyBtnClick"
          :disabled="isInCart"
        >
          {{ isInCart ? "В корзине" : "Купить" }}
          <BaseIcon
            name="check"
            :iconClasses="['picture__check-icon']"
            v-if="isInCart"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import BaseImage from "@/components/BaseImage";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BaseIcon,
    BaseImage,
  },
  props: {
    picture: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(["cartItems"]),
    isInCart() {
      return this.cartItems.find((item) => this.picture.id === item.id);
    },
    classes() {
      return [
        "picture",
        this.picture.size === "2" ? "picture--big" : "",
        this.picture.status === "sold" ? "picture--sold" : "",
      ];
    },
    pictureBuyBtnClasses() {
      return ["picture__buy", this.isInCart ? "picture__buy--disabled" : ""];
    },
    formattedPriceCurrent() {
      return Number(this.picture.prices.current).toLocaleString();
    },
    formattedPriceOld() {
      return Number(this.picture.prices.old).toLocaleString();
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    onBuyBtnClick() {
      this.addToCart(this.picture);
    },
  },
};
</script>

<style>
.picture {
  position: relative;
  height: 210px;
}

@media screen and (min-width: 1200px) {
  .picture--big {
    height: auto;
    grid-column-start: span 2;
    grid-row-start: span 2;
  }
}
.picture--sold img {
  opacity: 0.5;
}
.picture img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.picture:hover .picture__layout {
  opacity: 1;
  visibility: visible;
}
.picture__layout {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.75);
  transition: opacity 0.15s linear, visibility 0.15s linear;
  opacity: 0;
  visibility: hidden;
}
.picture__name {
  font-size: 1.125rem;
}
.picture__painter {
  font-size: 0.875rem;
}
.picture__old-price {
  font-size: 0.875rem;
  text-decoration: line-through;
  color: var(--text-secondary);
}
.picture__current-price {
  font-weight: bold;
}
.picture__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.picture__buy {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  font-weight: bold;
  white-space: nowrap;
  color: inherit;
  background-color: transparent;
  border: 1px solid var(--border);
  transition: color 0.15s linear, background-color 0.15s linear,
    border-color 0.15s linear;
  cursor: pointer;
}
.picture__buy:hover {
  background-color: var(--button-hover);
  border-color: var(--button-hover);
}
.picture__buy--disabled {
  padding: 0.75rem 1rem;
  color: var(--text-invert);
  background-color: var(--bg-invert);
  pointer-events: none;
}
.picture__buy--disabled:hover {
  background-color: var(--bg-invert);
}
.picture__sold-message {
  display: flex;
  align-items: center;
}
.picture__sold-icon {
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
  fill: none;
}
.picture__check-icon {
  width: 16px;
  height: 12px;
  margin-left: 0.625rem;
  fill: none;
}
</style>
