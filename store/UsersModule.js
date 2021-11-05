let users = localStorage.getItem("usersList");

export default {
  state: {
    users: users ? JSON.parse(users) : [],
    filteredUsers: users ? JSON.parse(users) : [],
    index: 1,
  },
  getters: {
    users: (state) => state.users,
    getFilteredUsers: (state) => state.filteredUsers,
    getIndex: (state) => state.index,
  },
  mutations: {
    ADD_USER(state, user) {
      state.filteredUsers.push(user);
      state.users.push(user);
    },
    REMOVE_ROW(state, user) {
      console.log(user);
      let index = state.users.findIndex((u) => u.id == user.id);
      state.filteredUsers.splice(index, 1);
      state.users.splice(index, 1);
    },
    SAVE_USERS(state) {
      localStorage.setItem("usersList", JSON.stringify(state.users));
    },
    REDACT_USER(state, newUser) {
      let index = state.users.findIndex((u) => u.id == newUser.id);
      state.filteredUsers.splice(index, 1, newUser);
      state.users.splice(index, 1, newUser);
    },
    FILTER_LIST(state, filter) {
      if (!filter || filter === "{}") {
        state.filteredUsers = state.users;
      } else {
        state.filteredUsers = state.users.filter((user) => {
          return `${user.firstName}${user.lastName}${user.position}`
            .toLowerCase()
            .includes(filter.toLowerCase());
        });
      }
    },
    SORT_BY(state, sortKey) {
      console.log(sortKey);
      if (sortKey == "Имя") {
        state.filteredUsers = state.users.sort(
          (a, b) =>
            a.firstName.localeCompare(b.firstName) |
            b.firstName.localeCompare(a.firstName)
        );
      } else if (sortKey == "Фамилия") {
        state.filteredUsers = state.users.sort(
          (a, b) =>
            a.lastName.localeCompare(b.lastName) |
            b.lastName.localeCompare(a.lastName)
        );
      } else if (sortKey == "Должность") {
        state.filteredUsers = state.users.sort(
          (a, b) =>
            a.position.localeCompare(b.position) |
            b.position.localeCompare(a.position)
        );
      } else if (sortKey == "ID") {
        state.filteredUsers = state.users.sort(
          (a, b) => a.id.localeCompare(b.id) | b.id.localeCompare(a.id)
        );
      }
    },
  },
  actions: {
    removeRow({ commit }, user) {
      commit("REMOVE_ROW", user);
      commit("SAVE_USERS");
    },
    addUser({ commit }, user) {
      commit("ADD_USER", user);
      commit("SAVE_USERS");
    },
    filter({ commit }, filter) {
      commit("FILTER_LIST", filter);
    },
    redactRow({ commit }, newUser) {
      commit("REDACT_USER", newUser);
      commit("SAVE_USERS");
    },
    sortBy({ commit }, sortKey) {
      commit("SORT_BY", sortKey);
    },
  },
};
