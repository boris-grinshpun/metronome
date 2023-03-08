import { createContext, Dispatch } from "react"
import { InitialStateType, MetronomeTimeActions, MetronomeGraphActions, MetronomeValueActions } from "./reducer"
export const ControlsContext = createContext<InitialStateType>({} as InitialStateType )
export const ActionContext = createContext<Dispatch<MetronomeTimeActions | MetronomeGraphActions | MetronomeValueActions>>({} as Dispatch<MetronomeTimeActions | MetronomeGraphActions | MetronomeValueActions>)