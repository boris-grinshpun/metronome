import { useContext, useEffect, useRef, useState } from "react"
import { ControlsContext } from "../../store/context"
import { Controls } from "../controls/controls"
import { Graph } from "../graph/graph"
import { useSeries } from "../graph/useSeries"
import { useMetronome } from "./useMetronome"
import './metronome.css'
export const Metronome = () => {
    const { playHandler, stopHandler } = useMetronome()
    const {
        bpm,
        bars,
        totalBars,
        up,
        upReps,
        downReps,
        down,
        sigBeat,
        sigTime,
        currentCount,
        currentBar
    } = useContext(ControlsContext)
    const { series, ticks } = useSeries({
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

    return (
        <>
            <Graph series={series}></Graph>
            <div className="indicators" >
                <h3>Bpm: {bpm}</h3>
                <h3>Count: {currentCount} </h3>
                <h3>Bars: {currentBar} / {bars}</h3>
            </div>
            <Controls></Controls>
            <div className="on-off">
                <button onClick={playHandler}>start</button>
                <button onClick={stopHandler}>stop</button>
            </div>
        </>
    )
}
