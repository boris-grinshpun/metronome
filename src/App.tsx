import './App.css'
import { createContext } from 'react'
import { Graph } from './features/graph/graph'
import { Controls } from './features/controls/controls'
import { ParametersProvider } from './store/store'
function App() {
  return (
    <div className="App">
      <div className="wrappewr">
          <ParametersProvider>
            <Graph></Graph>
            <Controls></Controls>
          </ParametersProvider>
      </div>
    </div>
  )
}

export default App
