import Task from './Task'

const TaskList = ({ tasks, setTasks }) => {
  return (
    <section>
      <h1>My Task List</h1>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          setTasks={setTasks}
        />
      ))}
    </section>
  )
}

export default TaskList