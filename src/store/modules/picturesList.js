export default {
  state: {
    pictures: [],
    filteredPictures: [],
    filter: {
      status: "all",
      search: "",
    },
  },
  getters: {
    pictures(state) {
      return state.pictures;
    },
    filteredPictures(state) {
      return state.filteredPictures;
    },
  },
  mutations: {
    setPicturesList(state, pictures) {
      state.pictures = pictures;
    },
    setFilteredPicturesList(state, pictures) {
      state.filteredPictures = pictures;
    },
    setFilterStatus(state, status) {
      state.filter.status = status;
    },
    setFilterSearch(state, search) {
      state.filter.search = search;
    },
    filterPictures(state) {
      state.filteredPictures = [...state.pictures];
      if (state.filter.status !== "all") {
        state.filteredPictures = state.filteredPictures.filter(
          (picture) => picture.status === state.filter.status
        );
      }
      if (state.filter.search !== "") {
        state.filteredPictures = state.filteredPictures.filter((picture) =>
          picture.name.toLowerCase().includes(state.filter.search.toLowerCase())
        );
      }
    },
  },
  actions: {
    async getPictures({ commit }) {
      const res = await fetch(
        "https://aaalab-25916-default-rtdb.firebaseio.com/pictures.json"
      );
      const pictures = await res.json();
      await commit("setPicturesList", pictures);
      await commit("setFilteredPicturesList", pictures);
    },

    async filterStatus({ commit, dispatch }, status) {
      await commit("setFilterStatus", status);
      dispatch("filterPictures");
    },
    async filterSearch({ commit, dispatch }, search) {
      await commit("setFilterSearch", search);
      dispatch("filterPictures");
    },
    async filterPictures({ commit }) {
      await commit("filterPictures");
    },
  },
};
