import { httpMake } from "@/api/index";

const api = httpMake();

function bookmarklist(id, success, fail) {
  api.get(`/map/bookmarklist/${id}`).then(success).catch(fail);
}

function deleteBookmark(bookmarkno, success, fail) {
  api.delete(`/map/deleteBookmark/${bookmarkno}`).then(success).catch(fail);
}

export { bookmarklist, deleteBookmark };
