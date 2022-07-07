import './App.scss'

import Sidebar from './components/Sidebar'
import About from './pages/About'

import Landing from './pages/Landing'
import Tools from './pages/Tools'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Landing />
      <About />
      <Tools />
    </div>
  )
}

export default App
