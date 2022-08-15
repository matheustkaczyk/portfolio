import './App.scss'

import Header from './components/Header'

import About from './pages/About'
import Landing from './pages/Landing'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Projects />
    </div>
  )
}

export default App
