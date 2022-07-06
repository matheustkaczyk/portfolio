import './App.scss'

import Sidebar from './components/Sidebar'
import About from './pages/About'

import Landing from './pages/Landing'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Landing />
      <About />
    </div>
  )
}

export default App
