import { useContext, useEffect, useRef } from "react"
import { ControlsContext } from "../../store/context"
import { useSound } from "../../utils/tick"

export const useMetronome = () =>{
    const { playSound } = useSound()
    const metronome = useRef<number | null>(null)
    const {
        bars,
        loops,
        up,
        upReps,
        downReps,
        down,
        sigBeat,
        sigTime,
        bpm,
        graph
    } = useContext(ControlsContext)
    useEffect(() => {
        if (bpm > 0 && metronome.current) {
            stopMetronome()
            startMetronome()
        }
    }, [bpm])
    const startMetronome = () => {
        if (!metronome.current) {
            console.log('start metronome')
            const tick = setInterval(() => {
                console.log('playing')
                playSound()
            }, (1000 * 60) / (bpm))

            metronome.current = tick
            console.log(tick, bpm)
        }

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

    return {playHandler, stopHandler}
}