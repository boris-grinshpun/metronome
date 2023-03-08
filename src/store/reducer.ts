
export type MetronomeInputTypes = "bpm" | "bars" | "loops" | "up" | "upReps" | "downReps" | "down" | "sigBeat" | "sigTime" | "totalBars"
export type MetronomeInputActions = "updateBpm" | "incbpm" | "decbpm" | "incbars" | "decbars" | "incup" | "decup" | "incdown" | "decdown" | "incsigBeat" | "decsigBeat" | "incsigTime" | "decsigTime" | "incupReps" | "decupReps" | "incdownReps" | "decdownReps" | "incloops" | "decloops" | "inctotalBars" | "dectotalBars"


export type MetronomeTimeActions = {
    type: MetronomeInputActions
    payload: number
}
export type MetronomeGraphActions = {
    type: "graph"
    payload: string
}
export type MetronomeValueActions = {
    type: "setValue"
    payload: {
        [key in MetronomeInputTypes]: number
    }
}

export type InitialStateType = {
    bpm: number,
    totalBars: number
    bars: number
    loops: number
    up: number
    upReps: number
    downReps: number
    down: number
    sigBeat: number
    sigTime: number,
    graph: string
}

export const reducer = (state: InitialStateType, action: MetronomeValueActions | MetronomeTimeActions | MetronomeGraphActions) => {
    switch (action.type) {
        case 'incbpm':
            return { ...state, bpm: state.bpm + action.payload }
        case 'decbpm':
            return { ...state, bpm: state.bpm - action.payload }
        case 'inctotalBars':
            return { ...state, totalBars: state.totalBars + action.payload }
        case 'dectotalBars':
            return { ...state, totalBars: state.totalBars - action.payload }
        case 'incbars':
            return { ...state, bars: state.bars + action.payload }
        case 'decbars':
            return { ...state, bars: state.bars - action.payload }
        case 'incup':
            return { ...state, up: state.up + action.payload }
        case 'decup':
            return { ...state, up: state.up - action.payload }
        case 'incdown':
            return { ...state, down: state.down + action.payload }
        case 'decdown':
            return { ...state, down: state.down - action.payload }
        case 'incsigBeat':
            return { ...state, sigBeat: state.sigBeat + action.payload }
        case 'decsigBeat':
            return { ...state, sigBeat: state.sigBeat - action.payload }
        case 'incsigTime':
            return { ...state, sigTime: state.sigTime + action.payload }
        case 'decsigTime':
            return { ...state, sigTime: state.sigTime - action.payload }
        case 'incupReps':
            return { ...state, upReps: state.upReps + action.payload }
        case 'decupReps':
            return { ...state, upReps: state.upReps - action.payload }
        case 'incdownReps':
            return { ...state, downReps: state.downReps + action.payload }
        case 'decdownReps':
            return { ...state, downReps: state.downReps - action.payload }
        case 'incloops':
            return { ...state, loops: state.loops + action.payload }
        case 'decloops':
            return { ...state, loops: state.loops - action.payload }
        case 'graph':
            return { ...state, graph: action.payload }
        case 'updateBpm':
            return { ...state, bpm: action.payload }
        case 'setValue':
            return { ...state, ...action.payload }
        default:
            return state
    }
}