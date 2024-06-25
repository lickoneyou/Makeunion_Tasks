import './App.css'
import { DndList } from './components/MantineDndList/MantineDndList'
import MantineInput from './components/MantineInput/MantineInput'

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <MantineInput />
      <DndList />
    </div>
  )
}

export default App
