const { createStudent } = require("./api");

const $form = $("form");
const $name = $("#name");
const $dateOfBirth = $("#birthday");
const $email = $("#email");
const $phone = $("#phone");

$form.on("submit", {}, (e) => {
  e.preventDefault();

  createStudent({
    fullname: $name.val(),
    dateOfBirth: $dateOfBirth.val(),
    email: $email.val(),
    phone: $phone.val(),
  }).then(() => {
    window.location.href = "/"
  });
});
