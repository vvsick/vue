// import { eventEmitter } from "./index.js";
import store from "./store/store.js";

export default {
  store,
  template: `
    <form @submit.prevent="send">
      <div class="field">
        <label class="label">Форма</label>
        <div class="control">
          <input v-model.trim="firstName" class="input" type="text" placeholder="Имя">
          <input v-model.trim="lastName" class="input" type="text" placeholder="Фамилия">
          <input v-model.trim="position" class="input" type="text" placeholder="Должность">
        </div>
      </div>
      <button class="button is-success" type="submit">Отправить</button>
    </form>
  `,
  data() {
    return {
      firstName: "",
      lastName: "",
      position: "",
    };
  },
  methods: {
    send() {
      this.$store.dispatch("addUser", {
        firstName: this.firstName,
        lastName: this.lastName,
        position: this.position,
        id: Math.random().toString(10).slice(2),
      });
      alert("Пользователь " + this.firstName + " успешно добавлен");
      this.firstName = "";
      this.lastName = "";
      this.position = "";
    },
  },
};
