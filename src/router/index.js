import { createRouter, createWebHashHistory } from "vue-router";
import BoradView from "@/views/BoardView.vue";
import MemberView from "@/views/MemberView.vue";
import MainView from "@/views/MainView.vue";
import MapView from "@/views/MapView.vue";

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
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
