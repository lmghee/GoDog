import { httpMake } from "@/api/index";

const api = httpMake();

function listArticle(param, success, fail) {
  api.get(`/board`).then(success).catch(fail);
}

function writeArticle(article, success, fail) {
  console.log(JSON.stringify(article));
  api.post(`/board`, JSON.stringify(article)).then(success).catch(fail);
}

function getArticle(articleno, success, fail) {
  api.get(`/board/${articleno}`).then(success).catch(fail);
}

function modifyArticle(article, success, fail) {
  api.put(`/board`, JSON.stringify(article)).then(success).catch(fail);
}

function deleteArticle(articleno, success, fail) {
  api.delete(`/board/${articleno}`).then(success).catch(fail);
}

export { listArticle, writeArticle, getArticle, modifyArticle, deleteArticle };
