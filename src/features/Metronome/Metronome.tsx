import { useContext } from "react"
import { ControlsContext } from "../../store/context"
import { Controls } from "../controls/controls"
import { Graph } from "../graph/graph"
import { useSeries } from "../graph/useSeries"
import { useMetronome } from "./useMetronome"

export const Metronome = () => {
    const {playHandler, stopHandler} = useMetronome()
    const {
        bpm,
        bars,
        graph,
        loops,
        up,
        upReps,
        downReps,
        down,
        sigBeat,
        sigTime,
    } = useContext(ControlsContext)
    const series: GraphPoint[] = useSeries({
        bpm,
        upReps,
        downReps,
        bars,
        down,
        up
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