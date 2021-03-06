//import axios from 'axios'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect} from 'react'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  // const [task, setTasks] = useState({ hits: [] }); 
  
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(setTasks => console.log(setTasks))
     
  },[])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== 
    id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} /
      >}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} /
        >
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App






 

