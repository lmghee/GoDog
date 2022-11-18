import { join } from "@/api/member";

const memberStore = {
  namespaced: true,

  actions: {
    async userJoin({ commit }, user) {
      console.log(commit);
      console.log(user);
      await join(
        user,
        ({ data }) => {
          if (data == "success") {
            alert("회원가입에 성공하였습니다!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default memberStore;
