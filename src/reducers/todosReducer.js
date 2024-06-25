export const todosReducer = (
  state = JSON.parse(localStorage.getItem("todos")),
  action
) => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  switch (action.type) {
    case "UPDATE":
      state = JSON.parse(localStorage.getItem("todos"));
      return state;
    default:
      return state;
  }
};