<template>
  <picture>
    <source
      type="image/webp"
      :srcset="
        require(`@/assets/images/${name}.webp`) +
          ' ,' +
          require(`@/assets/images/${name}@2x.webp`) +
          ' 2x'
      "
    />
    <img
      :src="require(`@/assets/images/${name}.${extension}`)"
      :srcset="require(`@/assets/images/${name}@2x.${extension}`) + ' 2x'"
      :alt="alt"
    />
  </picture>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    extension: {
      type: String,
      required: true,
      default: "",
    },
    alt: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style></style>
