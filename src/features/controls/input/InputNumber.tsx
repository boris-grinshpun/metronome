import { ChangeEvent, ChangeEventHandler, KeyboardEvent, KeyboardEventHandler, useContext, useState } from "react"
import { ActionContext, ControlsContext } from "../../../store/context"
import { MetronomeInputActions, MetronomeInputTypes, MetronomeValueActions } from "../../../store/reducer"
import './input.css'

export const InputNumber = (
    {
        buttons = false,
        min = 0,
        value = 0,
        max = Infinity,
        label = "label",
        placeholder = "",
        name,
        defaultValue = 0
    }: {
        buttons?: boolean,
        min: number,
        value: number,
        max: number,
        label: string,
        placeholder: string,
        name: MetronomeInputTypes,
        defaultValue: number
    }) => {
    const dispatch = useContext(ActionContext)
    const incHandler = () => {
        const Name = ("inc" + name) as MetronomeInputActions
        dispatch({ type: Name, payload: 1 })
    }
    const decHandler = () => {
        const Name = ("dec" + name) as MetronomeInputActions
        if (value)
            dispatch({ type: Name, payload: 1 })
    }
    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowUp':
                incHandler()
                break
            case 'ArrowDown':
                decHandler()
                break
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "setValue", payload: { [name]: Number(e.target.value) } } as MetronomeValueActions)
    }
    return (
        <div className="control">
            {label ? <label htmlFor="interval-down">{label}</label> : null}

            <div className="input">
                <input className="input" type="text" onChange={onChangeHandler} name="interval-down" value={value} placeholder={placeholder} onKeyDown={keyDownHandler} />
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

        </div>
    )
}