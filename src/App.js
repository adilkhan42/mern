import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Video from './Components/Video';
import Audio from './Components/Audio';
import Image from './Components/Image';
import Ganesh from './Components/Ganesh';
import ReusableForm from './Components/ReusableForm';
import Logout from './Components/Logout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            {/* <Route path='/navbar' element={<Navbar />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/audio' element={<Audio />} />
            <Route path='/video' element={<Video />} />
            <Route path='/image' element={<Image />} />
            <Route path='/ganesh' element={<Ganesh />} />
            <Route path='/logout' element={<Logout />} />
            {/* <Route path='/reusableForm' element={<ReusableForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App