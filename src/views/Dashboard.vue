<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Panel de control</h1>
    <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout
          row
          wrap
          :class="['pa-3 project', {
          'complete': project.status === 'Terminado',
          'on-going': project.status === 'En progreso',
          'pending': project.status === 'No comenzado',
          'cancelled': project.status === 'Cancelado'
        }]"
        >
          <v-flex xs12 md6>
            <div class="caption grey--text">Título de proyecto</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Persona</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Creado</div>
            <div>{{project.date}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Estado</div>
            <div>{{project.status}}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
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
          status: "En progreso",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Crear una nueva WEB",
          person: "José Javier",
          date: "10/05/2019",
          status: "No comenzado",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Acabar curso JS",
          person: "José Javier",
          date: "05/04/2019",
          status: "Terminado",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Aprender flask",
          person: "José Javier",
          date: "26/02/2019",
          status: "Cancelado",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.project {
  &.complete {
    border-left: 4px solid #3c9779;
  }
  &.on-going {
    border-left: 4px solid #cac85b;
  }
  &.pending {
    border-left: 4px solid #000000;
  }
  &.cancelled {
    border-left: 4px solid #ca5b5b;
  }
}
</style>