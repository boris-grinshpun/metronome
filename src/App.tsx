import { useEffect, useCallback, useRef, useState } from 'react'
import './App.css'
import { useSound } from './utils/tick'
import { Slider, Box } from '@mui/material'

function App() {
  const { createSound, playSound, stopSound } = useSound()
  const [metronome, setMetronome] = useState<number | null>(null)
  const [bpm, setBpm] = useState<number>(0)
  useEffect(() => {
    createSound()
    return () => {
      if (metronome)
        clearInterval(metronome)
    }
  }, [])
  useEffect(() => {
    if (bpm > 0 && metronome) {
      stopMetronome()
      startMetronome()
    }
    // console.log(bpm, metronome)
    // console.log(!bpm || metronome !== null)
    return () => {
      if (metronome)
        clearInterval(metronome)
    }
  }, [bpm])
  const startMetronome = () => {

    const tick = setInterval(() => {
      console.log('playing')
      playSound()
    }, (1000 * 60) / (bpm))

    setMetronome(tick)
    console.log(tick, bpm)

  }
  const stopMetronome = () => {
    if (metronome) {
      clearInterval(metronome)
      console.log('stopped')
      setMetronome(null)
      // stopSound()
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
    setBpm(Number(val))
  }
  return (
    <div className="App">
      <Box width={300}>
        <Slider min={0} max={240} aria-label="Default"
          value={bpm}
          onChange={handleSlider} valueLabelDisplay="auto" />
      </Box>
      <button disabled={!bpm || metronome !== null} onClick={playHandler}>start</button>
      <button onClick={stopHandler}>stop</button>
    </div>
  )
}

export default App
