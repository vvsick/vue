export default {
  template: `
    <div class="modal is-active" v-show="this.$store.getters.getRedactModal">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
          <form @submit.prevent="send">
          <h2>Изменить пользователя</h2>
          <input v-model='firstName' class="input" placeholder="Имя">
          <input v-model="lastName" class="input" placeholder="Фамилия">
          <input v-model="position" class="input" placeholder="Должность">
          <div>
          <button class="button" type="submit" @click="closeModal()">Сохранить</button>
          <button class="button" @click="closeModal()">Закрыть</button>
          </div>
          </form>
          </div>
        </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
    </div>
    `,
  data() {
    return {
      firstName: "",
      lastName: "",
      position: "",
      isShow: this.$store.getters.getShowRedactUser,
    };
  },
  methods: {
    closeModal() {
      this.$store.dispatch("closeRedactModal");
    },
    send() {
      this.$store.dispatch("redactRow", {
        firstName:
          this.firstName == ""
            ? this.$store.getters.getRedactFirstName
            : this.firstName,
        lastName:
          this.lastName == ""
            ? this.$store.getters.getRedactLastName
            : this.lastName,
        position:
          this.position == ""
            ? this.$store.getters.getRedactPosition
            : this.position,
        id: this.$store.getters.getConRedactUser.id,
      });
      this.firstName = "";
      this.lastName = "";
      this.position = "";
    },
  },
};
