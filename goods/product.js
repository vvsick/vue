export default {
  template: `
    <div>
      <div>
        <img class="img" :src=" './goods/images/' + productData.image" alt="img">
        <p>{{productData.name}}</p>
        <p>Цена: {{productData.price}}</p>
        <div class="rating"  :total-value="totalValue">
          <div class="rating_item" @click="setRating(5)">★</div>
          <div class="rating_item" @click="setRating(4)">★</div>
          <div class="rating_item" @click="setRating(3)">★</div>
          <div class="rating_item" @click="setRating(2)">★</div>
          <div class="rating_item" @click="setRating(1)">★</div>
        </div>
        <div>
          <button class="button">Добавить в корзину</button>
          <button class="button">Добавить в избранное</button>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
      totalValue: 0,
    };
  },
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    setRating(index) {
      this.totalValue = index;
    },
  },
};
