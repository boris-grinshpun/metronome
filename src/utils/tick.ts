import { useEffect, useState } from "react"

export function useSound() {

  const [context, setContext] = useState<AudioContext | undefined>()

  useEffect(() => {
    if (!context) {
      setContext(new AudioContext())
      console.log('audio context')
    }
  }, [])


  function closeSound() {
    if (context)
      context.close()
  }

  function playSound() {
    // const context = new AudioContext()
    if (context) {
      const o = context.createOscillator()
      const g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 0.1
      )
    }
  }
  return { closeSound, playSound }
}