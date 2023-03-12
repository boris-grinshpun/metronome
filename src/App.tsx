import './App.css'
import { createContext } from 'react'
import { Graph } from './features/graph/graph'
import { Controls } from './features/controls/controls'
import { ParametersProvider } from './store/store'
import { Metronome } from './features/Metronome/Metronome'
function App() {
  return (
    <div className="App">
      <h1>Speed Metronome</h1>
      <div className="wrappewr">
          <ParametersProvider>
          <Metronome/>
          </ParametersProvider>
      </div>
    </div>
  )
}

export default App
