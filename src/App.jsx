import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import HomePage from './HomePage'
import LoginPage from './LoginPage'
import AdminDashboard from './admin/AdminDashboard'

function ProtectedRoute({ children }) {

  const isLogin =
    localStorage.getItem('adminLogin') === 'true'

  return isLogin
    ? children
    : <Navigate to="/login" />
}

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}