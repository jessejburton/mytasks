import { Form, Field } from '@leveluptuts/fresh'

const TaskForm = ({ setTasks }) => {

  return (
    <Form
      onSubmit={data => {
        setTasks(prevState => [...prevState, data.task])
      }}
    >
      <Field>Task</Field>
    </Form>
  )
}

export default TaskForm