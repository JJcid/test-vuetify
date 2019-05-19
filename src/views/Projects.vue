<template>
  <div class="projects">
    <h1 class="subheading grey--text">Proyectos</h1>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{project.title}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{project.date}}</div>
              <div class="caption">{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Mirar vuetify",
          person: "José Javier",
          date: "19/05/2019",
          status: "onGoing",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Crear una nueva WEB",
          person: "José Javier",
          date: "10/05/2019",
          status: "pending",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Acabar curso JS",
          person: "Juan Pedro",
          date: "05/04/2019",
          status: "complete",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Aprender flask",
          person: "María",
          date: "26/02/2019",
          status: "cancelled",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === "José Javier");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>