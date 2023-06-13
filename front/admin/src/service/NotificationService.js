import http from "./AxiosContext";
const getAll = () => {
  return http.get("/notification/getAll");
};
const get = (id) => {
  return http.get(`/notification/getbyId/${id}`);
};
const create = (data) => {
  return http.post("/notification/create", data);
};
const update = (id, data) => {
  return http.put(`/notification/update/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/notification/delete/${id}`);
};
const findByName = (title) => {
  return http.get(`/notification/getbyname=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
};
