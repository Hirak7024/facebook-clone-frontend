import React from 'react'
import Register from './components/register/Register'
import Login from './components/login/Login'
import HomePage from './pages/home/HomePage'
// import { Home } from '@mui/icons-material'
import Profile from './pages/profile/Profile'
// import { Person } from '@mui/icons-material'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}
