<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Panel de control</h1>
    <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="['pa-3 project',project.status]">
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
            <div class="right">
              <v-chip
                flat
                small
                :class="['white--text caption my-2', project.status]"
              >{{humanizeStatus(project.status)}}</v-chip>
            </div>
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
          person: "José Javier",
          date: "05/04/2019",
          status: "complete",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        },
        {
          title: "Aprender flask",
          person: "José Javier",
          date: "26/02/2019",
          status: "cancelled",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde molestias accusantium, laborum, modi dolorem aliquam explicabo eos, possimus laboriosam voluptatibus minus. Fugiat, exercitationem esse reprehenderit quis rerum sapiente quae."
        }
      ]
    };
  },
  methods: {
    humanizeStatus(status) {
      const statusMap = {
        complete: "Terminado",
        onGoing: "En progreso",
        pending: "No comenzado",
        cancelled: "Cancelado"
      };
      return statusMap[status];
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  &.complete {
    border-left: 4px solid #3c9779;
  }
  &.onGoing {
    border-left: 4px solid #00eeff;
  }
  &.pending {
    border-left: 4px solid #ff792b;
  }
  &.cancelled {
    border-left: 4px solid #ca5b5b;
  }
}

.v-chip {
  &.complete {
    background: #3c9779;
  }
  &.onGoing {
    background: #00eeff;
  }
  &.pending {
    background: #ff792b;
  }
  &.cancelled {
    background: #ca5b5b;
  }
}
</style>