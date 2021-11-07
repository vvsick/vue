export default {
  template: `
    <header>
    
      <router-link
        v-for="btn in buttons"
        :key="btn.path"
        :to="btn.path" 
        class="button mx-1">
        {{ btn.label }}
      </router-link>

    </header>`,
  data: () => ({
    buttons: [
      { path: "/form", label: "Форма" },
      { path: "/list", label: "Таблица" },
      { path: "/goods", label: "Товары" },
    ],
  }),
};
