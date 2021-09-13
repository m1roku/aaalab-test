export default {
  state: {
    cart: [],
  },
  getters: {
    cartCounter(state) {
      return state.cart.length;
    },
    cartItems(state) {
      return state.cart;
    },
  },
  mutations: {
    updateCart(state, picture) {
      state.cart.push(picture);
    },
  },
  actions: {
    addToCart({ commit }, picture) {
      commit("updateCart", picture);
    },
  },
};
