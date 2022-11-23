import Vue from "vue";
import VueRouter from "vue-router";
import BoradView from "@/views/BoardView.vue";
import MemberView from "@/views/MemberView.vue";
import MainView from "@/views/MainView.vue";
import MapView from "@/views/MapView.vue";

import store from "@/store";

Vue.use(VueRouter);

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const checkToken = store.getters["memberStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch("memberStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    //next({ name: "login" });
    router.push("/member/loginform");
  } else {
    console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};

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
    children: [
      {
        path: "boardlist",
        name: "boardlist",
        component: () => import("@/components/Board/BoardList"),
      },
      {
        path: "view/:articleno",
        name: "boardarticleview",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/Board/BoardArticleView"),
      },
      {
        path: "boardwrite",
        name: "boardwrite",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/Board/BoardWrite"),
      },
      {
        path: "delete/:articleno",
        name: "boarddelete",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/Board/BoardDelete"),
      },
      {
        path: "modify",
        name: "boardmodify",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/Board/BoardModify"),
      },
    ],
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
      {
        path: "joinform",
        name: "joinform",
        component: () => import("@/components/Member/JoinForm"),
      },
      {
        path: "mypageform",
        name: "mypageform",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/Member/MyPageForm"),
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
      {
        path: "bookmarklist",
        name: "bookmarklist",
        component: () => import("@/components/Map/BookmarkList"),
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
