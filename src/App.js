import React from 'react'
import './App.scss'
import Layout from './layout/layout'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Layout />
      <BrowserRouter basename="/P12-front-end-dashboard">
        <Routes>
          <Route path="/" element={<Navigate to="/user/15" />} />
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
