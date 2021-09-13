import Vue from "vue";
import Vuex from "vuex";
import picturesList from "./modules/picturesList";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    picturesList,
    cart,
  },
});
