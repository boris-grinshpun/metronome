import { createContext, Dispatch } from "react"
import { InitialStateType, MetronomeActions } from "./reducer"
export const ControlsContext = createContext<InitialStateType>({} as InitialStateType )
export const ActionContext = createContext<Dispatch<MetronomeActions>>({} as Dispatch<MetronomeActions>)