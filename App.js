import Header from "./Header.js";

export default {
  components: { Header },
  template: `
  <div class="hero is-fullheight">
  <div class="hero-head">
  <Header/>
  </div>
  <main class="container mt-5 ml-4">
    <router-view></router-view>
  </main>
  <div class="footer hero-foot">
  Сделано Осыкиным Владимиром
  </div>
  </div>`,
};
