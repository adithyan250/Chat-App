import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/Authcontext'

function App() {

  const {authUser} = useAuthContext();

  return (
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
          <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/signup' element={authUser ? <Navigate to='/'/> : <Signup/>}/>
        </Routes>
        <Toaster/>
      </div>
  )
}

export default App


// 02:07:31 

// 02:59:05

// 03:12:00

// 03:54:00

// 04:23:00 For notification sound