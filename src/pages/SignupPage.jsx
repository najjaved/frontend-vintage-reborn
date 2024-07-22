import { useState } from 'react'

const SignupPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = { username, email, password }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input value={username} onChange={event => setUsername(event.target.value)} required />
        </label>
        <label>
          Email
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
            type='email'
          />
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
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default SignupPage;
