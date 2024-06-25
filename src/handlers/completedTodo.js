const completedTodo = (id) => {
  const todos = JSON.parse(localStorage.getItem('todos'))
  const addCompleted = todos.map((el) =>
    el.id === id ? { ...el, completed: !el.completed } : el,
  )
  localStorage.setItem('todos', JSON.stringify(addCompleted))
}

export default completedTodo
