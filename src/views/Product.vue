<template>
  <v-content>
    {{product}}
    <v-row>
      <v-col cols="6"> <h1>hola</h1>
        <v-img :src="product.image_link" height="200px"></v-img>
      </v-col>
    </v-row>

     <v-row>
      <v-col cols="6">
        <v-card-title>{{product.name}}</v-card-title>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
 methods: {
    ...mapActions(['setProduct'])
    },
    computed: {
    ...mapState(['product'])
    },
  created() {
    this.setProduct(this.$route.params.id)
  }
}

</script>

<style>

</style>