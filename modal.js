export default {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
        <div class="modal-content">
        <div>Вы действительно хотите удалить пользователя?</div>
        <button style="button" @click="removeRow(user)">Да</button>
        <button style="button" @click="closeModal()">Нет</button>
        </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    `,
};
