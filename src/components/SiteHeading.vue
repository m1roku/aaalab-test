<script>
export default {
  render: function(createElement) {
    return createElement("h" + this.level, this.$slots.default);
  },
  props: {
    level: {
      type: Number,
      required: true,
      default: 2,
    },
  },
};
</script>

<style>
.heading {
  padding: 1rem 0 2rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  background-image: url('"~@/assets/images/heading.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (min-width: 380px) {
  .heading {
    font-size: 2.375rem;
  }
}

@media screen and (min-width: 768px) {
  .heading {
    font-size: 3.375rem;
  }
}

@media screen and (min-width: 1200px) {
  .heading {
    font-size: 4.375rem;
  }
}

@media screen and (min-width: 1440px) {
  .heading {
    padding: 1.25rem 0 3.25rem;
    font-size: 5.375rem;
  }
}
</style>
