import './App.css'
import Workout_plan from './components/Fifth_Section/Workout_plan'
import Footer from './components/Footer/Footer'
import Client_management from './components/Fourth Section/Client_management'
import Navbar from './components/Navbar'
import Rights from './components/Rights/Rights'
import Content2 from './components/Second_Section/Content2'
import Trainer_authentication from './components/Third_Secction/Trainer_Authentication'
import Dog from './components/dog'
import { Canvas } from '@react-three/fiber'
import { Routes, Route } from 'react-router-dom'
import About from './components/Nav_about/About'
import Blog from './components/Nav_blog/Blog'
import Contact from './components/Nav_contact/Contact'

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <>
            <div className="main-container">

              <div className="content">
                <h1>Welcome to Trainova</h1>
                <h2>Smart Trainer Dashboard for Gym Coaches</h2>
                <p>
                  Most gym trainers still track client workouts and progress in notebooks.
                  This makes it hard to monitor progress and manage multiple clients.
                </p>
                <button>Get Started</button>
              </div>

              <div className="canvas-container">
                <Canvas>
                  <Dog />
                </Canvas>
              </div>

            </div>

            <Content2/>
            <Trainer_authentication/>
            <Client_management/>
            <Workout_plan/>
            <Footer/>
            <Rights/>
          </>
        }/>

        
        <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}

export default App