import './controls.css'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useSound } from '../../utils/tick'

import { useState, useEffect, useRef } from "react"
export function Controls() {
    const [type, setType] = useState<string>("linear")
    const { playSound } = useSound()
    const metronome = useRef<number | null>(null)
    const [bpm, setBpm] = useState<number>(50)

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
                    <div className="bpm-wr">
                        <label htmlFor="bpm">BPM</label>
                        <input type="text" name="bpm" value={bpm}/>
                    </div>
                    <div className="type">
                        <label htmlFor="type">Type</label>
                        <select name="type" defaultValue="none">
                            <option value="none">None</option>
                            <option value="linear">Linear</option>
                            <option value="dynamic">Dynamic</option>
                        </select>
                    </div>
                    <div className="signature-wrapper">
                        <label htmlFor="signature">Sig.</label>
                        <div className="signature" id="signature">
                            <input type="text" placeholder='4' /> /
                            <input type="text" placeholder='4' />
                        </div>
                    </div>
                    <div className="interval">
                        <label htmlFor="interval-up">Up</label>
                        <input type="text" name="interval-up" placeholder='2' />
                        <label htmlFor="reps-up">Reps</label>
                        <input type="text" name="reps-up" placeholder='1' />

                    </div>
                    <div className="interval">
                        <label htmlFor="interval-down">Down</label>
                        <input type="text" name="interval-down" placeholder='2' />
                        <label htmlFor="reps-down">Reps</label>
                        <input type="text" name="reps-down" placeholder='1' />
                    </div>
                    <div className="loop">
                        <label htmlFor="loop">Loops</label>
                        <input type="text" name="loop" placeholder='1' />
                    </div>


                </div>
                <div className="on-off">
                    <button onClick={playHandler}>start</button>
                    <button onClick={stopHandler}>stop</button>
                </div>
            </div>
        </>

    )
}