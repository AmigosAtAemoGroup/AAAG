<template>
  <v-app style="background-color: #eceff1">
    <v-app-bar app color="primary darken-3" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title>Amigos @ Aemo Group</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <template>
          <v-tabs align-with-title v-cloak>
            <v-tab :to="{ path: '/home' }">Home</v-tab>
          </v-tabs>
        </template>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
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
