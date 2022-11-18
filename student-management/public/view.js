import { deleteStudent } from "./api.js";

const $tbody = $("tbody");
/** 
    @param {any[]} students
 * 
*/
export const renderTable = (students) => {
  $tbody.html(""); // xóa HTML cũ

  students.forEach(({ fullname, dateOfBirth, email, phone, id }) => {
    const $tr = $(`
    <tr>
        <td>${fullname}</td>
        <td>${dateOfBirth}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>
          <a href="/edit.html?id=${id}" class="text-info"
            ><i class="fa fa-edit"></i> Chỉnh sửa</a
          >
          |
          <a class="text-danger"><i class="fa fa-trash-alt"></i> Xóa</a>
        </td>
      </tr>
         `);
    $tr.find(".text-danger").on("click", { id }, (e) => {
      if (confirm(`Bạn có chắc muốn xóa: ${fullname}?`)) {
        deleteStudent(id).then(() => {
          $tr.remove();
        });
      }
    });

    $tbody.append($tr);
  });
};
