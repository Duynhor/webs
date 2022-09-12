const todoList = document.querySelector(".todo-List")

const createTodoItem = ({ id, title, completed}) => {
    return`  <div class="todo-item ${completed ? "active-todo" :""}">
                    <div class="todo-item-title">
                        <input type="checkbox">
                        <p>Làm bài tập Javascript Phần array + string</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update">
                            <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete">
                            <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>`;
    
}
 
const filterTodo = (todos,filter) => {
    switch (filter) {
        case 2: {
            return todos.filter((todo) => !todo.completed);
        }

        case 3: {
            return todos.filter((todo) => todo.completed);
        }
        default:
            return todos;
    }
}

const renderTodoList = (todos) => {
    todoList.innerHTML = todos.map(createToDoItem).join("");
}