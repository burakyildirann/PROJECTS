import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoute from './components/AppRoute';
function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <AppRoute/>
      </Router>
    </>
  )
}

export default App
