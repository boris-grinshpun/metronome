import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import {reducer } from './reducer'
import { ControlsContext, ActionContext } from './context'
const initialState = {
    bpm: 132,
    targetBpm: 160,
    totalBars: 2,
    bars: 2,
    loops: 0,
    up: 8,
    upReps: 1,
    downReps: 1,
    down: 4,
    sigBeat: 4,
    sigTime: 4,
    graph: "none",
    bpmIndex: 0,
    currentCount: 4,
    currentBar: 1,
    tickIndex: 0
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