import { useEffect, useState } from "react"

export function useSound() {

    const [context, setContext] = useState<AudioContext | undefined>()
    console.log('rendered', Date.now())
    
    useEffect(()=>{
      if (!context) {
        setContext(new AudioContext())
      }
    },[])


    function closeSound(){
      if (context)
        context.close()
    }

    function playSound() {
      const context = new AudioContext()
      const o = context.createOscillator()
      const  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 0.1
      )
    }
    return { closeSound, playSound }
  }