let newtask = document.querySelector(".new-task");
let addbutton = document.querySelector(".add-button");
let tasklist = document.querySelector(".task-list");

newtask.addEventListener("keyup", () => {
  if (newtask.value.trim() != 0) {
    addbutton.classList.add("active");
  } else {
    addbutton.classList.remove("active");
  }
});

addbutton.addEventListener("click", () => {
  if (newtask.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <p>${newtask.value}</p>
            <div class="btn">
              <i class="fa-regular fa-square-check"></i>
              <i class="fa-solid fa-trash-can delete"></i>`;

    tasklist.appendChild(newItem);
    newtask.value = "";
  } else {
    alert("Enter task");
  }
});

tasklist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});

tasklist.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-square-check")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});
