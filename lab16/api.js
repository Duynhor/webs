const URL = {
  GET_TODO: "https://jsonplaceholder.typicode.com/todos?userId=1",
};

export const getAllToDo = () => {
  return axios.get(URL.GET_TODO);
};

export const createNewTodoItem = {
  title,
  completed: false,
};


