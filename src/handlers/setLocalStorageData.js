const setLocalStorageData = (todo, id) => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]))
  }

  const data = JSON.parse(localStorage.getItem('todos'))
  data.push({todo: todo, id: id, completed: false})
  localStorage.setItem('todos', JSON.stringify(data))
}

export default setLocalStorageData
