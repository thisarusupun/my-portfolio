import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import SocialIconBar from "./components/SocialIconBar"
import ThemeContextProvider from "./context/ThemeContextProvider"

function App() {
  
  return (

    <ThemeContextProvider>

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <SocialIconBar/>

    </ThemeContextProvider>
  )
}

export default App
