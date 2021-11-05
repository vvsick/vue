export default {
  template: `
    <table class="table is-fullwidth is-bordered">
      <thead>
        <tr>
          <th v-for="column in columns">
            <a href="#" @click="sortBy(column)" >{{ column }}
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in this.$store.getters.getFilteredUsers" :key="index">
        <td> {{index + 1}} </td>
        <td v-for="value in user">{{ value }}</td>
        <td><button class="button modal-button" @click="openDeleteModal(user)">Удалить</button></td>
        <td><button class="button modal-button" @click="openRedactModal(user)">Редактировать</button></td>
        </tr>
      </tbody>
    </table>
    `,
  data() {
    return {
      order: "asc", // desc
      columns: ["№", "Имя", "Фамилия", "Должность", "ID"],
    };
  },
  methods: {
    sortBy(sortKey) {
      this.order = this.order === "asc" ? "desc" : "asc";
      this.$store.dispatch("sortBy", {
        sortKey,
        order: this.order,
      });
    },
    openRedactModal(user) {
      this.$store.dispatch("openRedactModal", user);
    },
    openDeleteModal(user) {
      this.$store.dispatch("openDeleteModal", user);
    },
  },
};
