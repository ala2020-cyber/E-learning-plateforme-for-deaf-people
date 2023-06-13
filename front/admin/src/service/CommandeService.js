import http from "./AxiosContext";
const getAll = () => {
  return http.get("/order/getAll");
};
const get = (id) => {
  return http.get(`/order/getbyId/${id}`);
};
const create = (data) => {
  return http.post("/order/create", data);
};
const update = (id, data) => {
  return http.put(`/order/update/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/order/delete/${id}`);
};
const findByName = (title) => {
  return http.get(`/order/getbyname=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
};
