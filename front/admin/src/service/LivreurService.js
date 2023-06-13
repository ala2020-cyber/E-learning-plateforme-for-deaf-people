import http from "./AxiosContext";
const getAll = () => {
  return http.get("/livreur/getAll");
};
const get = id => {
  return http.get(`/livreur/getbyId/${id}`);
};
const create = data => {
  return http.post("/livreur/create", data);
};
const update = (id, data) => {
  return http.put(`/livreur/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/livreur/delete/${id}`);
};
const findByName = title => {
    return http.get(`/livreur/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };