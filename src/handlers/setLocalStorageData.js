const setLocalStorageData = (todo) => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]))
  }

  const data = JSON.parse(localStorage.getItem('todos'))
  data.push(todo)
  localStorage.setItem('todos', JSON.stringify(data))
}

export default setLocalStorageData
