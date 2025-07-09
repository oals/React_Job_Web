import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
        <main className="mt-5 flex-grow-1">
            <Router>
                 <div class="d-flex flex-column min-vh-100 ">
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
           </Router>
         </main>
         <Footer />
    </>
  )
}

export default App
