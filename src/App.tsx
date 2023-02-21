import { useEffect, useCallback, useRef, useState } from 'react'
import './App.css'
import { useSound } from './utils/tick'
import { Slider, Box } from '@mui/material'

function App() {
  const {playSound} = useSound()
  const metronome = useRef<number | null>(null)
  const [bpm, setBpm] = useState<number>(50)

  useEffect(() => {
    if (bpm > 0 && metronome.current) {
      stopMetronome()
      startMetronome()
    }
  }, [bpm])
  const startMetronome = () => {
    console.log('start metronome')
    const tick = setInterval(() => {
      playSound()
    }, (1000 * 60) / (bpm))

    metronome.current = tick
    console.log(tick, bpm)

  }
  const stopMetronome = () => {
    if (metronome.current) {
      clearInterval(metronome.current)
      console.log('stopped')
      metronome.current = null
    }
  }
  const playHandler = () => {
    if (bpm) {
      startMetronome()
    }
  }
  const stopHandler = () => {
    stopMetronome()
  }
  const handleSlider = (e: any, val: any) => {
    setBpm(()=>Number(val))
  }
  return (
    <div className="App">
      <Box width={300}>
        <Slider min={0} max={240} aria-label="Default"
          value={bpm}
          onChange={handleSlider} valueLabelDisplay="auto" />
      </Box>
      <button onClick={playHandler}>start</button>
      <button onClick={stopHandler}>stop</button>
    </div>
  )
}

export default App
