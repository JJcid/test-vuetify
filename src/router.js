import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () =>
        import(/* webpackChunkName: "projects" */ "./views/Projects.vue")
    },
    {
      path: "/teams",
      name: "teams",
      component: () =>
        import(/* webpackChunkName: "teams" */ "./views/Teams.vue")
    }
  ]
});
