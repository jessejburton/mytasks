import { useRouter } from 'next/router'

import Layout from '../../components/Layout'

const Project = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <h1>Hello World!</h1>
      <p>You are looking for a project with the id of {id}</p>
    </Layout>
  )
}

export default Project