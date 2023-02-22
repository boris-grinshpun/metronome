import { useContext, useState } from "react"
import { ActionContext, ControlsContext } from "../../../store/context"
import './input.css'

export const InputNumber = (
    {
        buttons = false,
        min = 0,
        value = 0,
        max = Infinity,
        label = "label",
        placeholder = "",
        name = "",
        defaultValue = 0
    }: {
        buttons: boolean, min: number, value: number, max: number, label: string, placeholder: string, name: string, defaultValue: number
    }) => {

    const dispatch = useContext(ActionContext)
    const incHandler = () => {
        dispatch({ type: 'inc' + name, payload: 1 })
    }
    const decHandler = () => {
        dispatch({ type: 'dec' + name, payload: 1 })
    }
    const keyDownHandler = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                incHandler()
                break
            case 'ArrowDown':
                incHandler()
                break
        }
    }
    return (
        <div className="control">
            {label ? <label htmlFor="interval-down">{label}</label> : null}

            <div className="input">
                <input type="text" name="interval-down" value={value} placeholder={placeholder} onKeyDown={keyDownHandler} />
            </div>
            {
                buttons ?
                    <div className="buttons">
                        <button className="up-down" onClick={incHandler}>+</button>
                        <button className="up-down" onClick={decHandler}>-</button>
                    </div>
                    :
                    null
            }
        </div>
    )
}