import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import SocialIconBar from "./components/SocialIconBar"

function App() {
  
  return (

    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <SocialIconBar/>

    </div>
  )
}

export default App
