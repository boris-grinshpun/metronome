import { createContext, ReactNode, useReducer } from 'react'
import { reducer } from './reducer'
import { ControlsContext, ActionContext } from './context'
const initialState = {
    bpm: 60,
    bars: 4,
    type: 'linear',
    loops: 0,
    up: 1,
    upReps: 2,
    downReps: 2,
    down: 1,
    sigBeat: 4,
    sigTime: 4
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