<template>
  <table>
    <tr>
      <td>이미지</td>
      <td>상품번호</td>
      <td>상품명</td>
      <td>상품가격</td>
    </tr>
    <!-- <tr v-for="p in product">
      <td></td>
      <td>{{ p.prodNo }}</td>
      <td>{{ p.prodName }}</td>
      <td>{{ p.prodPrice }}</td>
    </tr> -->
    <!-- TODO 3. 위의 tr태그와 똑같은 효과가 나도록 하위컴포넌트, ProductItem을 완성하세요-->
    <ProductItem
      v-for="p in product"
      :key="p.prodNo"
      v-bind:childProduct="p"
    ></ProductItem>
  </table>
</template>
<script>
//TODO 1.
export default {
  name: 'Product',
  //TODO 2.
  async mounted() {
    this.product = await this.requestProduct();
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    /**
     * 백엔드서버에게 상품목록을 요청한다
     */
    requestProduct() {
      const url = 'http://localhost:3000/product';
      return fetch(url).then((response) => {
        return response.json();
      });
    },
  },
};
</script>
