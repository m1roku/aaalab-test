<template>
  <div :class="classes">
    <PicturesItem
      v-for="picture in pictures"
      :key="picture.id"
      :picture="picture"
    />
  </div>
</template>

<script>
import PicturesItem from "@/components/PicturesItem";
export default {
  components: {
    PicturesItem,
  },
  props: {
    pictures: {
      type: Array,
      required: true,
      default: () => [],
    },
    listClasses: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    classes() {
      return [...this.listClasses, "pictures"];
    },
  },
};
</script>

<style>
.pictures {
  display: flex;
  flex-direction: column;
  grid-row-gap: 2rem;
}
@media screen and (min-width: 600px) {
  .pictures {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}
@media screen and (min-width: 768px) {
  .pictures {
    grid-gap: 2rem;
  }
}
@media screen and (min-width: 900px) {
  .pictures {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .pictures {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
