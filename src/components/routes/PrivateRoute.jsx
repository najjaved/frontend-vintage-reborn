import { useContext } from 'react'
import { SessionContext } from '../../contexts/SessionContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(SessionContext)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return children
}

export default PrivateRoute
