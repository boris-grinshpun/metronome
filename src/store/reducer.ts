export const reducer = (state, action) => {
    switch (action.type) {
        case 'incBpm':
            return {...state, bpm: state.bpm + action.payload}
        case 'decBpm':
            return {...state, bpm: state.bpm - action.payload}
        case 'incBars':
            return {...state, bars: state.bars + action.payload}
        case 'decBars':
            return {...state, bars: state.bars - action.payload}
        case 'incUp':
            return {...state, up: state.up + action.payload}
        case 'decUp':
            return {...state, up: state.up - action.payload}
        case 'incDown':
            return {...state, down: state.down + action.payload}
        case 'decDown':
            return {...state, down: state.down - action.payload}
        case 'incSigBeat':
            return {...state, sigBeat: state.sigBeat + action.payload}
        case 'decSigBeat':
            return {...state, sigBeat: state.sigBeat - action.payload}
        case 'incSigTime':
            return {...state, sigTime: state.sigTime + action.payload}
        case 'decSigTime':
            return {...state, sigTime: state.sigTime - action.payload}
        case 'incUpReps':
            return {...state, upReps: state.upReps + action.payload}
        case 'decUpReps':
            return {...state, upReps: state.upReps - action.payload}
        case 'incDownReps':
            return {...state, downReps: state.downReps + action.payload}
        case 'decDownReps':
            return {...state, downReps: state.downReps - action.payload}
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