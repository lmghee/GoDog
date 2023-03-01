import { httpMake } from "@/api/index";

const api = httpMake();

async function join(user, success, fail) {
  await api.post(`/member/join`, JSON.stringify(user)).then(success).catch(fail);
}

async function infoChange(user, success, fail) {
  await api.put(`/member/update`, JSON.stringify(user)).then(success).catch(fail);
}

async function userdelete(userId, success, fail) {
  await api.delete(`/member/${userId}`).then(success).catch(fail);
}

async function login(user, success, fail) {
  await api.post(`/member/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/member/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api.post(`/member/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await api.get(`/member/logout/${userid}`).then(success).catch(fail);
}

export { join, login, findById, tokenRegeneration, logout, infoChange, userdelete };
