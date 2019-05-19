<template>
  <div class="home">
    <h1>Home</h1>
    <v-btn class="indigo white--text">click me</v-btn>
    <v-btn depressed dark color="indigo">click me</v-btn>
    <v-btn depressed flat color="indigo">click me</v-btn>

    <v-btn depressed class="indigo white--text">
      <v-icon left>email</v-icon>
      <span>Send</span>
    </v-btn>

    <v-btn depressed small class="indigo white--text">
      <v-icon left small>email</v-icon>
      <span>Send</span>
    </v-btn>

    <v-btn depressed large class="indigo white--text">
      <span>Send</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="pink">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>