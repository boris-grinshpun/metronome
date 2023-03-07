import './controls.css'
import Slider from '@mui/material/Slider'
import { useSound } from '../../utils/tick'
import { useEffect, useRef, useContext } from "react"
import { InputNumber } from './input/InputNumber'
import { ActionContext, ControlsContext } from "../../store/context"
import { MetronomeActions } from '../../store/reducer'

export function Controls() {
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
        bpm
    } = useContext(ControlsContext)
    const dispatch = useContext(ActionContext)
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
    const handleSlider = (event: Event, value: number | number[], activeThumb: number) => {
        dispatch({type: 'updateBpm', payload: Number(value) as number} as MetronomeActions)
    }
    return (
        <>
            <Slider min={0} max={240} aria-label="Default"
                value={bpm}
                onChange={handleSlider}
                valueLabelDisplay="auto" />
            <div className="controls-wrapper">
                <div className="controls">
                    <InputNumber
                        min={0}
                        max={200}
                        label="Bpm"
                        placeholder='0'
                        name="bpm"
                        value={bpm}
                        defaultValue={60} />
                    <div className="type">
                        <label htmlFor="type">Type</label>
                        <select name="type" defaultValue="none">
                            <option value="none">None</option>
                            <option value="linear">Linear</option>
                            <option value="dynamic">Dynamic</option>
                        </select>
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber min={0}
                            max={13}
                            label="Sig"
                            placeholder='0'
                            name="sigBeat"
                            value={sigBeat}
                            defaultValue={4} />
                        /&nbsp;
                        <InputNumber min={0}
                            max={13}
                            label=""
                            placeholder='0'
                            name="sigTime"
                            value={sigTime}
                            defaultValue={4} />
                        <InputNumber
                            min={0}
                            max={200}
                            label="Bars"
                            placeholder='0'
                            name="bars"
                            value={bars}
                            defaultValue={4} />
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber
                            min={0}
                            max={20}
                            label="Up"
                            placeholder='0'
                            name="up"
                            value={up}
                            defaultValue={2} />&nbsp;
                        <InputNumber
                            min={0}
                            max={20}
                            label="Reps"
                            placeholder='0'
                            name="upReps"
                            value={upReps}
                            defaultValue={2} />
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber
                            min={0}
                            max={20}
                            label="Down"
                            placeholder='0'
                            name="down"
                            value={down}
                            defaultValue={2}
                        />&nbsp;
                        <InputNumber min={0}
                            max={20}
                            label="Reps"
                            placeholder='0'
                            name="downReps"
                            value={downReps}
                            defaultValue={2} />
                    </div>
                    <InputNumber
                        min={0}
                        max={20}
                        label="Loops"
                        placeholder='0'
                        name="loops"
                        value={loops}
                        defaultValue={0} />
                </div>
                <div className="on-off">
                    <button onClick={playHandler}>start</button>
                    <button onClick={stopHandler}>stop</button>
                </div>
            </div>
        </>

    )
}