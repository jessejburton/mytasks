import Layout from '../../components/Layout'
import { withApollo } from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const HELLO_QUERY = gql`
  query helloQuery {
    annotations {
      id
    }
  }
`

const Project = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  if (loading) return null
  console.log(data)
  return (
    <Layout>
      <h1>My Projects</h1>
    </Layout>
  )
}

export default withApollo(Project)