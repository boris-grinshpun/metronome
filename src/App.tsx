import './App.css'

import { Graph } from './features/graph/graph'
import { Controls } from './features/controls/controls'

function App() {

  return (
    <div className="App">
      <div className="wrappewr">
        <Graph></Graph>
        <Controls></Controls>
      </div>
    </div>
  )
}

export default App
