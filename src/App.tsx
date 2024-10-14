import './App.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/experience/Experience'
import { Contact } from './components/Contact/Contact.tsx'

function App() {

  return (
    <>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

export default App
