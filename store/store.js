import UsersModule from "./UsersModule.js";
import ListModule from "./ListModule.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: UsersModule,
    list: ListModule,
  },
});
