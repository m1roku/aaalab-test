<template
  ><form class="search" v-on:submit.prevent="onSubmit">
    <input
      class="search__input"
      type="text"
      placeholder="Поиск по названию картины"
      v-model="search"
    />
    <button type="submit" class="search__submit">
      Найти
      <BaseIcon name="search" :iconClasses="['search__icon']" />
    </button>
  </form>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import { mapActions } from "vuex";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["filterSearch"]),
    onSubmit() {
      this.filterSearch(this.search);
    },
  },
};
</script>

<style>
.search {
  display: flex;
  width: 100%;
  max-width: 30.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}
.search__input {
  width: 100%;
  font: inherit;
  font-size: 0.75rem;
  color: var(--text);
  background-color: transparent;
  border: 0;
}
@media screen and (min-width: 450px) {
  .search__input {
    font-size: 1rem;
  }
}
.search__input:focus {
  outline: none;
}
.search__submit {
  font-size: 0.875rem;
  text-transform: uppercase;
  color: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: color 0.15s linear;
  flex-shrink: 0;
}
.search__submit:hover {
  color: var(--text-inactive);
}
.search__icon {
  width: 16px;
  height: 16px;
  margin-left: 0.25rem;
  fill: none;
}
</style>
