import { httpMake } from "@/api/index";

const api = httpMake();

async function join(user, success, fail) {
  await api
    .post(`/member/join`, JSON.stringify(user))
    .then(success)
    .catch(fail);
}

export { join };
