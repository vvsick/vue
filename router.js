import Form from "./Form.js";
import List from "./list/List.js";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/form",
      name: "Form",
      component: Form,
    },
    {
      path: "/list",
      name: "List",
      component: List,
    },
    {
      path: "",
      redirect: "/list",
    },
    {
      path: "*",
      redirect: "/form",
    },
  ],
  // mode: "history",
});
