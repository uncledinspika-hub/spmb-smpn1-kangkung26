import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {

    // USERNAME & PASSWORD

    if (
      username === 'admin' &&
      password === 'spmb2026'
    ) {

      localStorage.setItem('adminLogin', 'true')

      navigate('/admin')

    } else {

      setError('Username atau Password salah')

    }

  }

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center mb-8">

          <img
            src="/images/logo.png"
            className="w-24 h-24 mx-auto mb-4"
          />

          <h1 className="text-3xl font-bold">
            Login Admin
          </h1>

          <p className="text-slate-500 mt-2">
            SPMB SMP Negeri 1 Kangkung
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-4 rounded-2xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-4 rounded-2xl"
          />

          {error && (

            <div className="bg-red-100 text-red-600 p-4 rounded-2xl">

              {error}

            </div>

          )}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-4 rounded-2xl font-semibold"
          >
            Login
          </button>

        </div>

      </div>

    </div>

  )
}