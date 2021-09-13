<template>
  <form class="filters" @change="onChange">
    <input
      class="visually-hidden filters__input"
      type="radio"
      name="filters"
      id="all"
      value="all"
      checked
    />
    <label class="filters__label" for="all">Все</label>
    <input
      class="visually-hidden filters__input"
      type="radio"
      name="filters"
      value="sold"
      id="sold"
    />
    <label class="filters__label" for="sold">Проданные на аукционе</label>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["filterStatus"]),
    onChange(evt) {
      const status = evt.target.value;
      this.filterStatus(status);
    },
  },
};
</script>

<style>
.filters {
  display: flex;
  align-content: center;
}
.filters__label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3125rem 1rem;
  color: var(--text-inactive);
  border: 1px solid transparent;
  cursor: pointer;
  transition: color 0.15s linear;
}
.filters__label:hover {
  color: var(--text);
}
.filters__label + .filters__label {
  margin-left: 2.1875rem;
}
.filters__input:checked + .filters__label {
  color: var(--text);
  border-color: var(--border);
}
</style>
