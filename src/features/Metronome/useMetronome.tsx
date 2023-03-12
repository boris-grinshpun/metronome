import { useContext, useEffect, useRef, useState } from "react"
import { ActionContext, ControlsContext } from "../../store/context"
import { useSound } from "../../utils/tick"
import { useSeries } from "../graph/useSeries"

export const useMetronome = () => {
    const { playSound } = useSound()
    const currentTickInd = useRef<number>(0)
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
            let totalCount = ticks[currentTickInd.current].count
            let beatCount = sigBeat
            let barCount = 1
            dispatch({type: 'updateCurrentCount', payload: totalCount})
            metronome.current = setInterval(function intervalTick() {

                if (totalCount < 1) {
                    clearInterval(metronome.current as number)
                    metronome.current = null
                    if (ticks.length - 1 > currentTickInd.current) {
                        currentTickInd.current++
                        dispatch({ type: "updateTickIndex", payload: currentTickInd.current })
                        dispatch({type: 'updateCurrentBar', payload: 1})
                        startMetronome()
                    } else {
                        stopMetronome()
                        dispatch({type: 'updateCurrentCount', payload: sigBeat})
                        dispatch({type: 'updateCurrentBar', payload: 1})
                    }
                } else {
                    console.log('bpm', ticks[currentTickInd.current].bpm, 'totalCount', currentTickInd.current, totalCount)
                    if (beatCount > 1) {
                        if (sigBeat === beatCount) {
                            dispatch({type: 'updateCurrentBar', payload: barCount})
                            barCount++
                        }
                        dispatch({type: 'updateCurrentCount', payload: beatCount})
                        beatCount--
                    } else {
                        dispatch({type: 'updateCurrentCount', payload: beatCount})
                        beatCount = sigBeat
                    }
                    playSound()
                    totalCount--
                }

                return intervalTick
            }(), (1000 * 60) / (ticks[currentTickInd.current].bpm))
        }

    }
    const stopMetronome = () => {
        if (metronome.current) {
            clearInterval(metronome.current)
            console.log('stopped')
        }
        currentTickInd.current = 0
        dispatch({ type: "updateTickIndex", payload: currentTickInd.current })
        dispatch({type: 'updateCurrentCount', payload: sigBeat})
        dispatch({type: 'updateCurrentBar', payload: 1})
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