export default {
  template: `
  <div class="modal is-active" v-show="this.$store.getters.getModal">
  <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
      <h2>Вы действительно хотите удалить пользователя?</h2>
      <button class="button" @click="(removeRow()), (closeModal())">Да</button>
      <button class="button" @click="closeModal()">Нет</button>
      </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
</div>
    `,
  methods: {
    closeModal() {
      this.$store.dispatch("closeDeleteModal");
    },
    removeRow() {
      this.$store.dispatch("removeRow", this.$store.getters.getConUser);
    },
  },
};
