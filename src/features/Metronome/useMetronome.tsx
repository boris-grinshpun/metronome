import { useContext, useEffect, useRef, useState } from "react"
import { ActionContext, ControlsContext } from "../../store/context"
import { useSound } from "../../utils/tick"
import { useSeries } from "../graph/useSeries"

export const useMetronome = () => {
    const { playSound } = useSound()
    const currentBpmInd = useRef<number>(0)
    const metronome = useRef<number | null>(null)
    const dispatch = useContext(ActionContext)
    const {
        bars,
        totalBars,
        up,
        upReps,
        downReps,
        down,
        sigBeat,
        sigTime,
        bpm,
    } = useContext(ControlsContext)
    const { ticks } = useSeries({
        bpm,
        totalBars,
        upReps,
        downReps,
        bars,
        down,
        up,
        sigBeat,
        sigTime
    })
    useEffect(() => {
        if (bpm > 0 && metronome.current) {
            stopMetronome()
            startMetronome()
        }
    }, [bpm])
    const startMetronome = () => {
        if (!metronome.current) {
            let count = ticks[currentBpmInd.current].count
            metronome.current = setInterval(function intervalTick() {
                if (count < 1) {
                    clearInterval(metronome.current as number)
                    metronome.current = null
                    if (ticks.length - 1 > currentBpmInd.current) {
                        currentBpmInd.current++
                        dispatch({type: "updateBpmIndex", payload:currentBpmInd.current})
                        startMetronome()
                    } else {
                        stopMetronome()
                    }
                } else {
                    console.log('bpm', ticks[currentBpmInd.current].bpm, 'count',currentBpmInd.current, count)
                    playSound()
                    count--
                }
                return intervalTick
            }(), (1000 * 60) / (ticks[currentBpmInd.current].bpm))
        }

    }
    const stopMetronome = () => {
        if (metronome.current) {
            clearInterval(metronome.current)
            console.log('stopped')
        }
        currentBpmInd.current = 0
        dispatch({type: "updateBpmIndex", payload:currentBpmInd.current})
        metronome.current = null
    }
    const playHandler = () => {
        if (bpm) {
            startMetronome()
        }
    }
    const stopHandler = () => {
        stopMetronome()
    }

    return { playHandler, stopHandler }
}