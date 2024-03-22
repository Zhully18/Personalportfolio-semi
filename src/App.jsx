import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Service from "./Components/Service/Service"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio"
import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact"
import Feedback from "./Components/Feedback/Feedback"

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Resume />
      <Portfolio />
      <Feedback />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App
