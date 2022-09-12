import { createNewTodoItem, getALLTodos} from "./api.js"
import { renderToDoList } from "./todo.js";

//Client state
const todos = [];
let filter = 1;

const formOption = document.querySelector(".todo-option");
const formTodo = document.querySelectorAll(".todo");

formOption.addEventListener("change",(e) => {
    filter = +formOption.elements['todo-option-item'].value;

    renderTodoList(todos, filter);
});
getALLTodos().then(({data}) => {
    todos.push(...data);
    renderToDoList(todos,filter);
});
 formTodo.addEventListener("submit", (e) => {
    e.preventDefault();

    createNewTodoItem(formTodo.elements.title.value).then((({data}) => {
        todos.push(data);

        renderTodoList(todos, filter);
        
        form
    }))
 })



