import Header from "./Header.js";

export default {
  components: { Header },
  template: `
  <div class="hero is-fullheight">
  <div class="hero-head">
  <Header/>
  </div>
  <main class="container ">
    <router-view></router-view>
  </main>
  <div class="footer hero-foot">
  Сделано Осыкиным Владимиром
  </div>
  </div>`,
};
