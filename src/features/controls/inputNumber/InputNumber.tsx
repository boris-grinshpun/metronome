import { useContext, useState } from "react"
import { ActionContext, ControlsContext } from "../../../store"
import './input.css'

export const InputNumber = (
    {
        min = 0,
        max = Infinity,
        label = "label",
        placeholder = "",
        name = "",
        defaultValue = 0
    }: {
        min: number, max: number, label: string, placeholder: string, name: string, defaultValue: number
    }) => {

    const dispatch = useContext(ActionContext)
    const state = useContext(ControlsContext)
    const incHandler = () => {
        dispatch({ type: 'inc' + label, payload: 1 })
    }
    const decHandler = () => {
        dispatch({ type: 'dec' + label, payload: -1 })
    }
    return (
        <div className="control">
            <label htmlFor="interval-down">{label}</label>
            <div className="input">
                <input type="text" name="interval-down" value={state[name]} placeholder={placeholder} />
            </div>
            <div className="buttons">
                <button className="up-down" onClick={ incHandler }>+</button>
                <button className="up-down" onClick={ decHandler }>-</button>
            </div>
        </div>
    )
}