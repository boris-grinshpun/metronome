import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import {reducer } from './reducer'
import { ControlsContext, ActionContext } from './context'
const initialState = {
    bpm: 132,
    totalBars: 2,
    bars: 2,
    loops: 0,
    up: 8,
    upReps: 1,
    downReps: 1,
    down: 8,
    sigBeat: 4,
    sigTime: 4,
    graph: "none"
}

export const ParametersProvider = ({ children } : {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ActionContext.Provider value={dispatch}>
            <ControlsContext.Provider value={state}>
                {children}
            </ControlsContext.Provider>
        </ActionContext.Provider>
    )
}