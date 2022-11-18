/**export const getStudent = () => {
    return fetch("students")
    .then ((res) => res.json())
    .then(console.log)
}*/

// Nếu import từ package được cài đặt thông qua npm thì không cần .js
// Nếu import từ file khác thì nhớ thêm .js

export const getStudents = () => {
  return axios.request({
    url: "/students",
    method: "GET",
  });
};

export const createStudent = (student) => {
  return axios.request({
    url: "/students",
    method: "POST",
    data: student,
  });
};

export const updateStudent = (studentId, data) => {
  return axios.request({
    url: "/students/" + studentId,
    method: "PUT",
    data,
  });
};

export const deleteStudent = (studentId) => {
  return axios.request({
    url: "/students/" + studentId,
    method: "DELETE",
  });
};
