import http from "../http-common";

const getAll = () => {
  return http.get("/students");
};

const get = id => {
  return http.get(`/students/${id}`);
};

const create = data => {
  return http.post("/students", data);
};

const update = (data) => {
  http.put(`/students`, data);
  return data;
};

const remove = id => {
  return http.delete(`/students/${id}`);
};

const removeAll = () => {
  return http.delete(`/students`);
};

const findByTitle = title => {
  return http.get(`/students?title=${title}`);
};

const StudentService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default StudentService;
