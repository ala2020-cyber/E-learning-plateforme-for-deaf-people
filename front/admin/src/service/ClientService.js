import http from "./AxiosContext";
const getAll = () => {
  return http.get("/users/getAll");
};
const get = (id) => {
  return http.get(`/users/getbyId/${id}`);
};
const create = (data) => {
  return http.post("/users/register", data);
};
const update = (id, data) => {
  return http.put(`/users/update/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/users/delete/${id}`);
};
const findByName = (title) => {
  return http.get(`/users/getbyname=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
};
