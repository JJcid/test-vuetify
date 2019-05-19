<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Añadir nuevo proyecto</v-btn>
    <v-card>
      <v-card-title>
        <h2>Nuevo proyecto</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="newProjectForm">
          <v-text-field label="Título" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Descripción" v-model="content" prepend-icon="edit"></v-textarea>
          <v-menu>
            <v-text-field
              :value="formatDate"
              slot="activator"
              label="Fecha"
              prepend-icon="date_range"
            ></v-text-field>
            <v-date-picker v-model="date"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn flat justify-end class="success" @click="submit">Añadir proyecto</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      date: "",
      inputRules: [v => v.length >= 3 || "Mínimo de 3 caracteres"]
    };
  },
  computed: {
    formatDate() {
      const date = [...this.date.split("-")];
      date[1] = date[1] - 1;
      return this.date
        ? new Date(...date).toLocaleDateString("es-Es")
        : this.date;
    }
  },
  methods: {
    submit() {
      if (this.$refs.newProjectForm.validate()) {
        alert([this.title, this.content, this.formatDate]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>