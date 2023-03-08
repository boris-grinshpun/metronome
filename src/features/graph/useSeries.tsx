import { InitialStateType } from "../../store/reducer"

export const useSeries = ({
  bpm,
  totalBars,
  upReps,
  downReps,
  bars,
  down,
  up,
  sigBeat,
  sigTime
}:
  Omit<InitialStateType, "graph" | "loops">
) => {

  const series: GraphPoint[] = []
  const ticks: MetronomeTick[] = []
  let isUp = true
  let graphBpm = bpm
  let graphUpReps = upReps
  let graphDownReps = downReps
  let graphBars = totalBars
  let i = 0

  series.push(
    {
      x: 0,
      y: bpm
    }
  )
  ticks.push(
    {
      bpm: bpm,
      count: sigBeat * bars
    }
  )

  while (graphBars > 0) {

    if (!graphUpReps) {
      isUp = !isUp
      graphUpReps = upReps
    } else if (isUp) {
      graphBpm = graphBpm + up
      graphUpReps--
      graphBars--
      i++
      series.push(
        {
          x: i,
          y: graphBpm
        }
      )
      ticks.push(
        {
          bpm: graphBpm,
          count: sigBeat * bars
        }
      )
    }

    else if (!graphDownReps) {
      isUp = !isUp
      graphDownReps = downReps
    } else if (!isUp) {
      graphBpm = graphBpm - down
      graphDownReps--
      graphBars--
      i++
      series.push(
        {
          x: i,
          y: graphBpm
        }
      )
      ticks.push(
        {
          bpm: graphBpm,
          count: sigBeat * bars
        }
      )
    }


console.log(series, ticks)
  }
  return { series, ticks }
}