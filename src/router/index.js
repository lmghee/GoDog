import Vue from "vue";
import VueRouter from "vue-router";
import BoradView from "@/views/BoardView.vue";
import MemberView from "@/views/MemberView.vue";
import MainView from "@/views/MainView.vue";
import MapView from "@/views/MapView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/board",
    name: "board",
    component: BoradView,
  },
  {
    path: "/member",
    name: "member",
    component: MemberView,
    children: [
      {
        path: "loginform",
        name: "loginform",
        component: () => import("@/components/Member/LoginForm"),
      },
    ],
  },

  {
    path: "/map",
    name: "map",
    component: MapView,
    children: [
      {
        path: "travelmap",
        name: "travelmap",
        component: () => import("@/components/Map/TravelMap"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
