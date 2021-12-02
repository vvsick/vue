import Product from "./product.js";

export default {
  template: `
      <div>
        <label class="label">Товары</label>
        <div class="wrapper">
            <Product
            v-for="product in paginatedGoods"
            :key="product.article"
            :productData="product"
            />
        </div>
        <div class="pagination is-centered">
        <div class="pagination-list">
        <div class="pagination-link" 
        v-for="page in pages"
        :key="page"
        @click="changePage(page)">
        {{page}}</div>
        </div>
        </div>
      </div>
    `,
  components: { Product },
  data() {
    return {
      goods: [
        {
          image: "1.jpg",
          name: "s",
          price: "1900",
          article: "T1",
        },
        {
          image: "2.jpg",
          name: "a",
          price: "2000",
          article: "T2",
        },
        {
          image: "3.jpg",
          name: "q",
          price: "3000",
          article: "T3",
        },
        {
          image: "4.jpg",
          name: "w",
          price: "1900",
          article: "T4",
        },
        {
          image: "5.jpg",
          name: "e",
          price: "2500",
          article: "T5",
        },
        {
          image: "6.jpg",
          name: "r",
          price: "1700",
          article: "T6",
        },
        {
          image: "7.jpg",
          name: "d",
          price: "2300",
          article: "T7",
        },
        {
          image: "8.jpg",
          name: "f",
          price: "2900",
          article: "T8",
        },
        {
          image: "9.jpg",
          name: "z",
          price: "3400",
          article: "T9",
        },
        {
          image: "10.jpg",
          name: "x",
          price: "3500",
          article: "T10",
        },
      ],
      goodsPerPage: 6,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      let count = 0;
      for (let key in this.goods) {
        count++;
      }
      return Math.ceil(count / this.goodsPerPage);
    },
    paginatedGoods() {
      let from = (this.pageNumber - 1) * this.goodsPerPage;
      let to = from + this.goodsPerPage;
      return this.goods.slice(from, to);
    },
  },
  methods: {
    changePage(page) {
      this.pageNumber = page;
    },
  },
};
