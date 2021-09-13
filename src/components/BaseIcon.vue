<template>
  <svg :class="classes" xmlns="http://www.w3.org/2000/svg" v-html="path"></svg>
</template>

<script>
import icons from "@/icons";
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    iconClasses: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      path: icons[this.name].path,
    };
  },
  computed: {
    classes() {
      return [...this.iconClasses];
    },
  },
};
</script>

<style>
svg {
  vertical-align: middle;
  fill: currentColor;
  stroke: currentColor;
}
</style>
