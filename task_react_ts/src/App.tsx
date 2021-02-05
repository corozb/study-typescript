import React, { useState, useRef } from 'react'

type FormElement = React.FormEvent<HTMLFormElement>
interface ITask {
  name: string
  done: boolean
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([])

  const taskRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormElement) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  console.log(tasks)

  const addTask = (name: string): void => {
    const newTask = [...tasks, { name, done: false }]
    setTasks(newTask)
  }

  const toggleDoneTask = (i: number): void => {
    const newTask: ITask[] = [...tasks]
    newTask[i].done = !newTask[i].done
    setTasks(newTask)
  }

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks]
    newTasks.splice(i, 1)
    setTasks(newTasks)
    taskRef.current?.focus()
  }

  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <form onSubmit={handleSubmit} className='card-body'>
              <input
                className='form-control'
                type='text'
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                autoFocus
                ref={taskRef}
              />
              <button className='btn btn-success btn-block mt-2'>Save</button>
            </form>
            {tasks.map((task: ITask, i: number) => (
              <div className='card card-body mt-2' key={i}>
                <h2 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h2>
                <div>
                  <button className='btn btn-secondary' onClick={() => toggleDoneTask(i)}>
                    {task.done ? '❌' : '✔'}
                  </button>
                  <button className='btn btn-danger' onClick={() => removeTask(i)}>
                    🚫
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
