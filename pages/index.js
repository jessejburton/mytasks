import { useState } from 'react'

import { withApollo } from '../lib/apollo'
import Layout from '../components/Layout'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Get Styled components working with NextJS Get Styled components working with NextJS Get Styled components working with NextJS",
      isComplete: true,
      hours: 0
    },
    {
      id: 2,
      task: "Get NPM working again",
      isComplete: false,
      hours: 0
    }
  ])

  return (
    <Layout>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Layout>
  )
}

export default withApollo(Home)