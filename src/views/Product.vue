<template>
  <div class="product">
    <v-container>
    <v-row v-for="product in filterList" :key="product.id" cols="4">
      <v-col cols="6">
        <v-img :src="product.image_link"></v-img>
      </v-col>
      <v-col cols="6">
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-text>{{product.description}}</v-card-text>
        <v-card-text>{{product.price}}</v-card-text>
        <v-card-text>0</v-card-text>
        <v-container>
        <v-btn color="green darken-2" @click="addCart(product)">agregar<v-icon>mdi-cart</v-icon></v-btn>
        <v-btn color="error" @click="deleteToCart(product)">Quitar<v-icon>mdi-cart-off</v-icon></v-btn>
        </v-container>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
  }),
  computed: {
    ...mapState(["products", "product", "cart"]),
    parametro() {
      return this.$route.params.id;
    },
    filterList() {
      return this.products.filter((product) => {
        return product.id == this.$route.params.id
      })
    }
  },
  methods: {
    ...mapActions(['setProducts', 'addCart', 'removeCart']),
    deleteToCart(product) {
      this.removeCart(product)
    }

    // deleteToCart(product) {
    //   if (this.cart.length >= 0) {
    //   this.removeCart(product)
    //   }
    //   this.buttonRemove()
    // },
    // buttonRemove() {
    //   return this.cart.length >= 0 ? true : false
    // }
  },
  created: function () {
    if (this.products.length ==0) {
      this.setProducts();
    }
  }
}
</script>