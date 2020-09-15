<template>
  <v-container>
    <h1>aqui estaran todos mis productos</h1>
    <v-container>
       <v-text-field v-model="search" append-icon="mdi-magnify" label="Busca un producto" single-line hide-details></v-text-field>
    </v-container>
    <v-row>
      <v-col v-for="product in filterList" :key="product.id" cols="4">
      <v-card class="mx-auto" max-heigth="300px">
        <v-img :src="product.image_link" height="200px"></v-img>

        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>$ {{product.price}}</v-card-subtitle>

        <v-card-actions>
          <v-btn color="warning" :to="'/product/'+product.id">Ver más</v-btn>

          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
    <product></product>
  </v-container>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import Product from '../views/Product'

export default {
  data: () => ({
    search: '',
  }),
  components: {
    Product
  },
  methods: {
    ...mapActions(['setProducts'])
  },
  computed: {
    ...mapState(['products']),
    filterList() { //funcion para filtrar y buscar un producto
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created: function () {
    this.setProducts();
  }
}
</script>