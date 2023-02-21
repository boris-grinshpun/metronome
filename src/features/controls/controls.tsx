import './controls.css'


import { useState } from "react"
export function Controls() {
    const [type, setType] = useState<string>("linear")
    return (
        <>  <label htmlFor="type">Type</label>
            <select name="type" id="type" defaultValue="linear">
                <option value="linear">Linear</option>
                <option value="dynamic">Dynamic</option>
            </select>
            <div className="wrapper">
                <label htmlFor="signature">signature</label>
                <div className="signature" id="signature">
                    <input type="text" /> /
                    <input type="text" />
                </div>
                <div className="interval">
                    <label htmlFor="interval-up">Up</label>
                    <input type="text" name="interval-up" />
                    <label htmlFor="reps-up">Reps</label>
                    <input type="text" name="reps-up" />
                    
                </div>
                <div className="interval">
                    <label htmlFor="interval-down">Down</label>
                    <input type="text" name="interval-down" />
                    <label htmlFor="reps-down">Reps</label>
                    <input type="text" name="reps-down" />
                </div>
                <div className="loop">
                    <label htmlFor="loop">Loops</label>
                    <input type="text" name="loop" />
                </div>
            </div>
        </>

    )
}