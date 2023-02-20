import { useEffect } from "react"

export function useSound() {
    let o: OscillatorNode | undefined
    let g: GainNode | undefined
    let context: AudioContext | undefined
    console.log('rendered', Date.now())

    useEffect(() => {
      createSound()
      return () => {
        if (context) 
        context.close()
      }
    }, [])
    
    function createSound() {
      if (!context) {
        context = new AudioContext()
      }
    }
    function playSound() {
      if (context) {
        o = context.createOscillator()
        g = context.createGain()
        o.connect(g)
        o.type = "sine"
        g.connect(context.destination)
  
        o.start(0)
        g.gain.exponentialRampToValueAtTime(
          0.00001, context.currentTime + 0.04
        )
  
        // o.stop()
      }
    }

    function stopSound(){
      if (o)
        o.stop()
    }
    return { createSound, playSound, stopSound }
  }