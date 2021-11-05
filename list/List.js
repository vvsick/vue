import ModalDelete from "./ModalDelete.js";
import Table from "./table.js";
import ModalEdit from "./ModalEdit.js";

export default {
  template: `<div>
  <input type="text" class="input mb-2" placeholder="Фильтр" v-model="filterInp" @keyup="filterRow(filterInp)">
    
    <Table/>

    <ModalDelete/>

    <ModalEdit />
    
    </div>
  `,
  components: { ModalDelete, Table, ModalEdit },
  data() {
    return {
      filterInp: "",
    };
  },
  methods: {
    filterRow(filterInp) {
      const filter = filterInp.toString();
      // Значение не меняется - лучше const
      // const filter = filterInp.toString().toLowerCase();
      this.$store.dispatch("filter", filter);
    },
  },
};
