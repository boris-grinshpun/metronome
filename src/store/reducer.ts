export type MetronomeInputOptions = "incbpm" | "decbpm" | "incbars" | "decbars" | "incup" | "decup" | "incdown" | "decdown" | "incsigBeat" | "decsigBeat" | "incsigTime" | "decsigTime" | "incupReps" | "decupReps" | "incdownReps" | "decdownReps" | "incloops" | "decloops"
export type MetronomeListOptions = "linear" | "dynamic"
export type MetronomeOptions = MetronomeInputOptions & MetronomeListOptions

export type MetronomeActions = {
    type: MetronomeOptions
    payload: number
}
export type InitialStateType = {
    bpm: number
    bars: number
    loops: number
    up: number
    upReps: number
    downReps: number
    down: number
    sigBeat: number
    sigTime: number
}

export const reducer = (state: InitialStateType, action: MetronomeActions) => {
    switch (action.type) {
        case 'incbpm':
            return {...state, bpm: state.bpm + action.payload}
        case 'decbpm':
            return {...state, bpm: state.bpm - action.payload}
        case 'incbars':
            return {...state, bars: state.bars + action.payload}
        case 'decbars':
            return {...state, bars: state.bars - action.payload}
        case 'incup':
            return {...state, up: state.up + action.payload}
        case 'decup':
            return {...state, up: state.up - action.payload}
        case 'incdown':
            return {...state, down: state.down + action.payload}
        case 'decdown':
            return {...state, down: state.down - action.payload}
        case 'incsigBeat':
            return {...state, sigBeat: state.sigBeat + action.payload}
        case 'decsigBeat':
            return {...state, sigBeat: state.sigBeat - action.payload}
        case 'incsigTime':
            return {...state, sigTime: state.sigTime + action.payload}
        case 'decsigTime':
            return {...state, sigTime: state.sigTime - action.payload}
        case 'incupReps':
            return {...state, upReps: state.upReps + action.payload}
        case 'decupReps':
            return {...state, upReps: state.upReps - action.payload}
        case 'incdownReps':
            return {...state, downReps: state.downReps + action.payload}
        case 'decdownReps':
            return {...state, downReps: state.downReps - action.payload}
        case 'incloops':
            return {...state, loops: state.loops + action.payload}
        case 'decloops':
            return {...state, loops: state.loops - action.payload}
        case 'linear':
            return {...state, type: action.type}
        case 'dynamic':
            return {...state, type: action.type}
        default:
            return state
    }
}