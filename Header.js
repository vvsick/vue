export default {
  template: `
    <header>
    <div class="sections">
      <div>
        <router-link
          v-for="btn in buttons"
          :key="btn.path"
          :to="btn.path" 
          class="button mx-1">
          {{ btn.label }}
        </router-link>
        </div>
        <div>
        <router-link
          v-for="btn in rightCornerBtns"
          :key="btn.path"
          :to="btn.path" 
          class="button mx-1">
          {{ btn.label }}
        </router-link>
        </div>
        </div>
    </header>`,
  data: () => ({
    buttons: [
      { path: "/form", label: "Форма" },
      { path: "/list", label: "Таблица" },
      { path: "/goods", label: "Товары" },
    ],
    rightCornerBtns: [
      { path: "/cart", label: "Корзина" },
      { path: "/favorites", label: "❤" },
    ],
  }),
};
