import './App.scss'

import Sidebar from './components/Sidebar'

import About from './pages/About'
import Landing from './pages/Landing'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Landing />
      <About />
      <Projects />
    </div>
  )
}

export default App
