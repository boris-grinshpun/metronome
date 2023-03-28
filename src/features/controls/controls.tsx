import './controls.css'
import Slider from '@mui/material/Slider'
import { useSound } from '../../utils/tick'
import { useEffect, useRef, useContext, EventHandler, ChangeEventHandler, ChangeEvent } from "react"
import { InputNumber } from './input/InputNumber'
import { ActionContext, ControlsContext } from "../../store/context"

export function Controls() {
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
        graph,
        totalBars,
        targetBpm
    } = useContext(ControlsContext)
    const dispatch = useContext(ActionContext)

    const handleSlider = (event: Event, value: number | number[], activeThumb: number) => {
        dispatch({ type: 'updateBpm', payload: Number(value) as number })
    }
    const handleGraphType = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'graph', payload: event.target.value })
    }
    return (
        <>
            <Slider min={0} max={240} aria-label="Default"
                value={bpm}
                onChange={handleSlider}
                valueLabelDisplay="auto" />
            <div className="controls-wrapper">
                <div className="controls">
                    <div className="one-line-wrapper">
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={200}
                            label="Bpm"
                            placeholder='0'
                            name="bpm"
                            value={bpm}
                            defaultValue={60} />
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={200}
                            label="Target Bpm"
                            placeholder='0'
                            name="targetBpm"
                            value={targetBpm}
                            defaultValue={160} />
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={200}
                            label="Bars"
                            placeholder='0'
                            name="bars"
                            value={bars}
                            defaultValue={4} />
                        {/* <InputNumber
                            buttons={true}
                            min={0}
                            max={200}
                            label="Total Bars"
                            placeholder='0'
                            name="totalBars"
                            value={totalBars}
                            defaultValue={60} /> */}
                    </div>
                    {/* <div className="type">
                        <label htmlFor="type">Type</label>
                        <select onChange={handleGraphType} name="type" value={graph}>
                            <option value="none">None</option>
                            <option value="linear">Linear</option>
                            <option value="dynamic">Dynamic</option>
                        </select>
                    </div> */}
                    <div className="one-line-wrapper">
                        {/* <InputNumber
                            buttons={true}
                            min={0}
                            max={13}
                            placeholder='0'
                            name="sigBeat"
                            label="Note"
                            value={sigBeat}
                            defaultValue={4} />
                       &nbsp;/&nbsp;
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={13}
                            label=""
                            placeholder='0'
                            name="sigTime"
                            value={sigTime}
                            defaultValue={4} />&nbsp; */}
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={20}
                            label="Up"
                            placeholder='0'
                            name="up"
                            value={up}
                            defaultValue={2} />
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={20}
                            label="Down"
                            placeholder='0'
                            name="down"
                            value={down}
                            defaultValue={2}
                        />
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber
                            buttons={true}
                            min={1}
                            max={20}
                            label="Up Reps"
                            placeholder='0'
                            name="upReps"
                            value={upReps}
                            defaultValue={2} />
                        <InputNumber
                            buttons={true}
                            min={0}
                            max={20}
                            label="Down Reps"
                            placeholder='0'
                            name="downReps"
                            value={downReps}
                            defaultValue={2} />
                    </div>
                    {/* <InputNumber
                        buttons={true}
                        min={0}
                        max={20}
                        label="Loops"
                        placeholder='0'
                        name="loops"
                        value={loops}
                        defaultValue={0} /> */}
                </div>

            </div>
        </>

    )
}