import App from "./App.js";
import router from "./router.js";
import store from "./store/store.js";

new Vue({
  store,
  router,
  render(h) {
    return h(App);
  },
}).$mount("#app");
