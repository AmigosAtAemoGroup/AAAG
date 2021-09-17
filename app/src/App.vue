<template>
  <v-app style="background-color: #eceff1">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <!-- <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar> -->
        <h2 class="mr-4">Amigos @ Aemo</h2>
        <v-btn :to="{ path: '/home' }" color="primary"> Home </v-btn>
        <v-btn :to="{ path: '/create-event' }" color="primary">
          Create Event
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>