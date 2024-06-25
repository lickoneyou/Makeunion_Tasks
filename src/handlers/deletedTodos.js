const deletedTodos = (id) => {
  const todos = JSON.parse(localStorage.getItem('todos'))
  const filteredData = todos.filter((el) => el.id !== id)
  localStorage.setItem('todos', JSON.stringify(filteredData))
}

export default deletedTodos
