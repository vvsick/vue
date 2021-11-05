export default {
  state: {
    showRedactModal: false,
    conRedactUser: "",
    redactFirstName: "",
    redactLastName: "",
    redactPosition: "",
    showModal: false,
    conUser: "",
  },
  getters: {
    getShowRedactModal: (state) => state.showRedactModal,
    getModal: (state) => state.showModal,
    getRedactModal: (state) => state.showRedactModal,
    getConUser: (state) => state.conUser,
    getRedactFirstName: (state) => state.conRedactUser.firstName,
    getRedactLastName: (state) => state.conRedactUser.lastName,
    getRedactPosition: (state) => state.conRedactUser.position,
    getConRedactUser: (state) => state.conRedactUser,
  },
  mutations: {
    OPEN_DELETE_MODAL(state, user) {
      state.showModal = true;
      state.conUser = user;
    },
    CLOSE_DELETE_MODAL(state) {
      state.showModal = false;
    },
    OPEN_REDACT_MODAL(state, user) {
      state.showRedactModal = true;
      state.conRedactUser = user;
    },
    CLOSE_REDACT_MODAL(state) {
      state.showRedactModal = false;
    },
  },
  actions: {
    openDeleteModal({ commit }, user) {
      commit("OPEN_DELETE_MODAL", user);
    },
    closeDeleteModal({ commit }) {
      commit("CLOSE_DELETE_MODAL");
    },
    openRedactModal({ commit }, user) {
      commit("OPEN_REDACT_MODAL", user);
    },
    closeRedactModal({ commit }) {
      commit("CLOSE_REDACT_MODAL");
    },
  },
};
