import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'

const LoginPage = () => {
  const { setToken } = useContext(SessionContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = { username, password }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setToken(data.token)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input value={username} onChange={event => setUsername(event.target.value)} required />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
            type='password'
          />
        </label>
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}

export default LoginPage;
