<template>
  <v-app>
    <v-content>
      <v-app-bar app color="grey darken-4" dark>
        <v-toolbar-title>Maybelline</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" text>home</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" dark><v-icon>mdi-cart</v-icon> carro: {{carro}}</v-btn>
      </v-app-bar>
      </v-content>
      <router-view></router-view>
        <v-card height="150">
          <v-footer absolute class="font-weight-medium" color="indigo lighten-4">
            <v-col class="text-center" cols="12">{{ new Date().getFullYear() }} — <strong>Vuetify</strong></v-col>
          </v-footer>
        </v-card>
    </v-app>
</template>

<script>
import { mapState} from "vuex";

export default {
  name:"app",
 computed: {
   ...mapState(["cart"]),
    carro() {
      return this.cart.length;
    },
 },
}
</script>