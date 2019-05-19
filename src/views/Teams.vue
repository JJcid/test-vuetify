<template>
  <div class="teams">
    <h1 class="subheading grey--text">Equipos</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="person.avatar" alt="avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Mensaje</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "JJ",
          role: "Desarrollador Front-end",
          avatar: "avatar/avatar_1.png"
        },
        {
          name: "Dani",
          role: "Diseñador",
          avatar: "/avatar/avatar_2.png"
        },
        {
          name: "Alicia",
          role: "Call center",
          avatar: "/avatar/avatar_3.png"
        },
        {
          name: "Vanessa",
          role: "Asesor de imagen",
          avatar: "/avatar/avatar_4.png"
        },
        {
          name: "Jaime",
          role: "Experto en ventas",
          avatar: "/avatar/avatar_5.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>