import { useContext } from "react"
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
    } = useContext(ControlsContext)
    const { series } = useSeries({
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
                <Controls></Controls>
                <div className="on-off">
                    <button onClick={playHandler}>start</button>
                    <button onClick={stopHandler}>stop</button>
                </div>
        </>
    )
}
