import './controls.css'
import Slider from '@mui/material/Slider'
import { useSound } from '../../utils/tick'
import { useState, useEffect, useRef, useContext } from "react"
import { InputNumber } from './input/InputNumber'
import { ControlsContext } from "../../store/context"

export function Controls() {
    const { playSound } = useSound()
    const metronome = useRef<number | null>(null)
    const [bpm, setBpm] = useState<number>(50)
    const {
        bars,
        loops,
        up,
        upReps,
        downReps,
        down,
        sigBeat,
        sigTime
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
    const handleSlider = (e: any, val: any) => {
        setBpm(() => Number(val))
    }
    return (
        <>
            <Slider min={0} max={240} aria-label="Default"
                value={bpm}
                onChange={handleSlider} valueLabelDisplay="auto" />
            <div className="controls-wrapper">
                <div className="controls">
                    <InputNumber min={0} max={200} label="Bpm" placeholder='0' name="Bpm" value={bpm} defaultValue={60} />
                    <div className="type">
                        <label htmlFor="type">Type</label>
                        <select name="type" defaultValue="none">
                            <option value="none">None</option>
                            <option value="linear">Linear</option>
                            <option value="dynamic">Dynamic</option>
                        </select>
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber min={0} max={13} label="Sig" placeholder='0' name="SigBeat" value={sigBeat} defaultValue={4} />
                        /&nbsp;
                        <InputNumber min={0} max={13} label="" placeholder='0' name="SigTime" value={sigTime} defaultValue={4} />
                        <InputNumber min={0} max={200} label="Bars" placeholder='0' name="Bars" value={bars} defaultValue={4} />
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber min={0} max={20} label="Up" placeholder='0' name="Up" value={up} defaultValue={2} />&nbsp;
                        <InputNumber min={0} max={20} label="Reps" placeholder='0' name="UpReps" value={upReps} defaultValue={2} />
                    </div>
                    <div className="one-line-wrapper">
                        <InputNumber min={0} max={20} label="Down" placeholder='0' name="Down" value={down} defaultValue={2} />&nbsp;
                        <InputNumber min={0} max={20} label="Reps" placeholder='0' name="DownReps" value={downReps} defaultValue={2} />
                    </div>
                    <InputNumber min={0} max={20} label="Loops" placeholder='0' name="Loops" value={loops} defaultValue={0} />
                </div>
                <div className="on-off">
                    <button onClick={playHandler}>start</button>
                    <button onClick={stopHandler}>stop</button>
                </div>
            </div>
        </>

    )
}