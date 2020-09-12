<template>
  <v-container>
    <h1>aqui estaran todos mis productos</h1>
    <v-container>
       <v-text-field v-model="search" append-icon="mdi-magnify" label="Busca un producto" single-line hide-details></v-text-field>
    </v-container>
    <v-row>
      <v-col v-for="product in filterList" :key="product.id" cols="3">
      <v-card class="mx-auto" max-heigth="300px">
        <v-img :src="product.image_link" height="200px"></v-img>

        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>$ {{product.price}}</v-card-subtitle>

        <v-card-actions>
          <v-btn text>Agregar al carro</v-btn>
          <v-btn color="purple" text to="/product">Ver detalle</v-btn>

          <v-spacer></v-spacer>

        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>descripcion corta del producto</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapState, mapActions } from 'vuex'

  export default {
    data: () => ({
      show: false,
      search: '',
    }),
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