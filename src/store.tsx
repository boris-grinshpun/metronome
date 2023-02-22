import { createContext, useReducer } from 'react'
const initialState = {
    bpm: 60,
    type: 'linear',
    loops: 0,
    up: 1,
    upReps: 2,
    downReps: 2,
    down: 1,
    sigBeat: 4,
    sigTime: 4
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'incBpm':
            return {...state, bpm: state.bpm + action.payload}
        case 'decBpm':
            return {...state, bpm: state.bpm - action.payload}
        case 'incUp':
            return {...state, up: state.up + action.payload}
        case 'decUp':
            return {...state, up: state.up - action.payload}
        case 'incDown':
            return {...state, down: state.down + action.payload}
        case 'decDown':
            return {...state, down: state.down - action.payload}
        case 'incSigBeat':
            return {...state, sigbeat: state.sigbeat + action.payload}
        case 'decSigBeat':
            return {...state, sigbeat: state.sigbeat - action.payload}
        case 'incSigTime':
            return {...state, sigtime: state.sigtime + action.payload}
        case 'decSigTime':
            return {...state, sigtime: state.sigtime - action.payload}
        case 'incUpReps':
            return {...state, upreps: state.upreps + action.payload}
        case 'decUpReps':
            return {...state, upreps: state.upreps - action.payload}
        case 'incDownReps':
            return {...state, downreps: state.downreps + action.payload}
        case 'decDownReps':
            return {...state, downreps: state.downreps - action.payload}
        case 'incLoops':
            return {...state, loops: state.loops + action.payload}
        case 'decLoops':
            return {...state, loops: state.loops - action.payload}
        case 'type':
            return {...state, type: state.type + action.payload}
        default:
            return state
    }
}
export const ControlsContext = createContext({})
export const ActionContext = createContext({})

export const ParametersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ActionContext.Provider value={dispatch}>
            <ControlsContext.Provider value={state}>
                {children}
            </ControlsContext.Provider>
        </ActionContext.Provider>
    )
}