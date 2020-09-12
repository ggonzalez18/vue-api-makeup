<template>
  <v-container>
    <h1>aqui estaran todos mis productos</h1>
    <v-card class="mx-auto" max-width="344" v-for='(product, index) in products' :key="index">
      <v-img :src="product.image_link" height="200px"></v-img>

      <v-card-title>{{product.name}}</v-card-title>
      <v-card-subtitle>$ {{product.price}}</v-card-subtitle>

      <v-card-actions>
        <v-btn text>Agregar</v-btn>
        <v-btn color="purple" text>Explore</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>descripcion corta del producto</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>


<script>
import { mapState, mapActions } from 'vuex'

  export default {
    data: () => ({
      show: false,
      makeup: {
        brand: '',
        name: '',
        price: 0,
        image_link:'',

      }
    }),
    methods: {
      ...mapActions(['setProducts'])
    },
    computed: {
      ...mapState(['products'])
    },
    created: function () {
      this.setProducts();
    }
  }
</script>